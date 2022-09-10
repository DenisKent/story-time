import { OGM } from "@neo4j/graphql-ogm";
import { driver } from "./driver";
import { typeDefs } from "./schema";

import type { ModelMap } from "./codegen-model-types";

export const ogm = new OGM<ModelMap>({ typeDefs, driver });

let _initialised = false;

export const initialiseStoreConnection = async () => {
  if (!_initialised) {
    console.log("initialising store");
    _initialised = true;
    await ogm.init();
  }
};

export const Scene = ogm.model("Scene");
export const AutomaticProgression = ogm.model("AutomaticProgression");

export default { Scene, AutomaticProgression };
