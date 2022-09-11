import { driver } from "../../app/store/driver";
import { ogm, Scene } from "../../app/store/models";

const dump = async () => {
  const session = driver.session();
  await session.run("MATCH (n) DETACH DELETE n");
};
async function main() {
  await ogm.init();
  console.log("STARTING DB SCRIPT");
  console.log("DUMPING EXISTING NODES");
  await dump();
  const _startingScene = await Scene.create({
    input: [
      {
        name: "START",
        title: "hello world",
        automaticProgression: {
          create: {
            node: {
              progression_delay_in_ms: 3000,
              scene: {
                create: { node: { name: "goodbye ", title: "goodbye world" } },
              },
            },
          },
        },
      },
    ],
  });

  const _notFoundScene = await Scene.create({
    input: [{ name: "404", title: "404 not found the scene" }],
  });
  console.log("FINISHED DB SCRIPT");
  await driver.close();
}

main();
