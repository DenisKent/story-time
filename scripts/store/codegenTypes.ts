import { generate } from "@neo4j/graphql-ogm";
import { ogm } from "../../app/store/models";
import * as path from "path";

const outFile = path.join(
  __dirname,
  "..",
  "..",
  "app",
  "store",
  "codegen-model-types.ts"
);

async function main() {
  await generate({
    ogm,
    outFile,
  });

  console.log("Types Generated");

  process.exit(1);
}
main();
