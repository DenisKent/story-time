import { openai } from "../openApi";
import { fetch } from "@remix-run/node";
import { listMyModels } from "./listAllFilesAndFineTunes";

const main = async () => {
  try {
    const { data: filesData } = await openai.listFiles();
    console.log("--------FILES START--------");
    if (filesData.data) {
      for (let i = 0; i < filesData.data.length; i++) {
        const file = filesData.data[i];
        if (file.id) {
          const { data: deleteData } = await openai.deleteFile(file.id);
          console.log({
            id: file.id,
            filename: file.filename,
            deleted: deleteData.deleted,
          });
        }
      }
    }
    console.log("--------FILES END--------");

    console.log("--------FINE TUNES START--------");
    const fineTunes = await listMyModels();
    if (fineTunes) {
      for (let i = 0; i < fineTunes.length; i++) {
        const fineTune = fineTunes[i];
        if (fineTune.id) {
          console.log(fineTune);
          const response = await fetch(
            `https://api.openai.com/v1/models/${fineTune.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              },
            }
          );
          const deletedModel = (await response.json()) as any;
          console.log(deletedModel);
        }
      }
    }
    console.log("--------FINE TUNES END--------");
  } catch (err: any) {
    console.error(err.message);
  }
};

main();
