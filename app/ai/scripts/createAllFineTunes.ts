import fs from "fs";
import path from "path";
import csv from "csvtojson";
import lodash from "lodash";

// must be imported after dotenv
import { openai } from "../openApi";
import {
  classificationModels,
  promptSuffix,
  completionPrefix,
  completionSuffix,
} from "../classification";
import type { IClassificationModel } from "../classification";

const csvTrainingDataDirectory = path.join(__dirname, "..", "trainingData");
const jsonLTrainingDataDirectory = path.join(
  __dirname,
  "..",
  "trainingData",
  "jsonL"
);

interface ITrainingRecord {
  model_name: string;
  prompt: string;
  completion: string;
}

const createJsonLFile = async (model: IClassificationModel) => {
  const { file, classes, name } = model;
  const csvFilePath = path.join(csvTrainingDataDirectory, file);
  const jsonArray = await csv().fromFile(csvFilePath);

  const modelRecords: ITrainingRecord[] = jsonArray.filter(
    (record) => record.model_name
  );

  // validate completion classes
  const uniqueCompletions = lodash.uniq(
    modelRecords.map(({ completion }) => completion)
  );
  if (!lodash.isEqual(uniqueCompletions.sort(), classes.sort())) {
    console.error({
      trainingClasses: uniqueCompletions.sort(),
      configuredClasses: classes.sort(),
    });
    throw new Error(`model ${name} failed classes check training validation`);
  }

  const decoratedRecords = modelRecords.map(({ prompt, completion }) => ({
    prompt: `${prompt}${promptSuffix}`,
    completion: `${completionPrefix}${completion}${completionSuffix}`,
  }));

  const jsonLString = decoratedRecords
    .map((obj) => JSON.stringify(obj))
    .join("\n");

  const newFilename = `${name}.jsonl`;
  const jsonLFilePath = path.join(jsonLTrainingDataDirectory, newFilename);
  fs.writeFileSync(jsonLFilePath, jsonLString);
  return jsonLFilePath;
};

const createFineTunedModels = async (models: IClassificationModel[]) => {
  try {
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      const jsonLFilePath = await createJsonLFile(model);
      console.log(`CREATED FILE: ${jsonLFilePath}`);

      const { data: file } = await openai.createFile(
        fs.createReadStream(jsonLFilePath),
        "fine-tune"
      );
      console.log(`UPLOADED FILE: ${file.id}`);

      if (file.id) {
        const fineTuneParams = {
          training_file: file.id,
          model: model.modelType,
          // classification_n_classes: model.classes.length, TODO work out why this isn't happy
          suffix: model.name,
        };
        console.log(fineTuneParams);
        const { data: fineTune } = await openai.createFineTune(fineTuneParams);
        console.log(`CREATED FINE TUNE FILE: ${fineTune.id}`);
      }
    }
  } catch (err: any) {
    console.error(err.message, err);
  }
};

createFineTunedModels(classificationModels);
