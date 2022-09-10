import { json } from "@remix-run/node";
import { useLoaderData, Link, Form, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

import invariant from "tiny-invariant";
import { z } from "zod";
import models, { initialiseStoreConnection } from "~/store/models";
import { STARTING_SCENE_NAME, NOT_FOUND_SCENE_NAME } from "~/lib/constants";

import type * as modelTypes from "~/store/codegen-model-types";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";

const gql = String.raw;
const selectionSet = gql`
  {
    id
    title
    description
    automaticProgression {
      progression_delay_in_ms
      scene {
        id
      }
    }
  }
`;

export async function loader({ params }: LoaderArgs) {
  await initialiseStoreConnection();
  const { sceneId } = params;
  invariant(sceneId, "sceneId not found");
  let scene: modelTypes.Scene;
  if (sceneId === STARTING_SCENE_NAME) {
    [scene] = await models.Scene.find({
      where: { name: sceneId },
      selectionSet,
    });
  } else {
    [scene] = await models.Scene.find({
      where: { id: sceneId },
      selectionSet,
    });
  }
  if (!scene) {
    [scene] = await models.Scene.find({
      where: { name: NOT_FOUND_SCENE_NAME },
      selectionSet,
    });
  }
  return json<modelTypes.Scene>(scene);
}

// const schema = z
//   .object({
//     userInput: z.string().max(20),
//     sceneId: z.string(),
//   })
//   .strip();

// export async function action({ request }: ActionArgs) {
//   const form = await request.formData();

//   const { userInput, sceneId } = schema.parse({
//     userInput: form.get("userInput"),
//     sceneId: form.get("sceneId"),
//   });
//   const scene = getScene(sceneId);
//   invariant(scene.interaction, "scene.interaction not found");

//   const action = resolveInteraction(userInput, scene.interaction);
//   if (action.type === "changeScene") {
//     return redirect(`/${action.sceneId}`);
//   }
//   return null;
// }

export default function Scene() {
  let navigate = useNavigate();

  const scene = useLoaderData<modelTypes.Scene>();
  const { id, title, description, automaticProgression } = scene;

  useEffect(() => {
    let timer: number;
    if (automaticProgression) {
      timer = setTimeout(() => {
        navigate(`/${automaticProgression.scene.id}`);
      }, automaticProgression.progression_delay_in_ms) as unknown as number;
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [automaticProgression, navigate]);

  return (
    <div>
      <section className="scene">
        {title && <h2 className="scene__title">{title}</h2>}
        {description && <p className="scene__description">{description}</p>}

        {/* {interaction && (
          <Form method="post">
            <input type="hidden" name="sceneId" value={id} />
            <label>
              What do you want to do?
              <input type="text" name="userInput" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )} */}
      </section>
    </div>
  );
}
