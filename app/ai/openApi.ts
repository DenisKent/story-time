import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

export const availableModelNames = [
  "ada",
  "babbage",
  "curie",
  "davinci",
] as const;
export type OpenAIModelName = typeof availableModelNames[number];
