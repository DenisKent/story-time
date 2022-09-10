import fs from "fs";
import { openai } from "./openApi";
import type { OpenAIModelName } from "./openApi";

export interface IClassificationModel {
  name: string;
  file: string;
  classes: string[];
  modelType: OpenAIModelName;
}

export const classificationModels: IClassificationModel[] = [
  {
    name: "pub_entry",
    file: "classificationTraining.csv",
    classes: ["talk", "attack", "take", "leave", "other"],
    modelType: "curie",
  },
];

export const promptSuffix = "\n\n###\n\n";
export const completionPrefix = " ";
export const completionSuffix = "";

const createClassificationPrompt = () => {};

// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: "Say this is a test",
//   temperature: 0,
//   max_tokens: 6,
// });

const uploadFile = async (path: string) => {
  const { data } = await openai.createFile(
    fs.createReadStream("mydata.jsonl"),
    "fine-tune"
  );
  return data.id;
};
