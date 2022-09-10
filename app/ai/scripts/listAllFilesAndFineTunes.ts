import { openai } from "../openApi";

export const listMyModels = async () => {
  const { data: allModels } = await openai.listModels();
  if (allModels.data) {
    return allModels.data.filter((model) =>
      `${model.owned_by}`.startsWith("user")
    );
  }
  return [];
};

const main = async () => {
  const files = await openai.listFiles();
  console.log("--------FILES START--------");
  console.log(files.data);
  console.log("--------FILES END--------");

  console.log("--------FINE TUNES START--------");
  const myModels = await listMyModels();
  console.log(myModels);
  console.log("--------FINE TUNES END--------");
};

main();
