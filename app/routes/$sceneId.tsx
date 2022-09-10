import { json, redirect } from "@remix-run/node";
import { useLoaderData, Link, Form } from "@remix-run/react";
import invariant from "tiny-invariant";
import { z } from "zod";
import { getScene, sceneIds } from "~/data";
import { resolveInteraction } from "~/ai";

import type { IScene } from "~/data";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";

interface ILoaderData {
  scene: IScene;
}
export async function loader({ params }: LoaderArgs) {
  const { sceneId } = params;
  invariant(sceneId, "sceneId not found");
  const scene = getScene(sceneId);

  return json<ILoaderData>({ scene });
}

const schema = z
  .object({
    userInput: z.string().max(20),
    sceneId: z.enum(sceneIds),
  })
  .strip();

export async function action({ request }: ActionArgs) {
  const form = await request.formData();

  const { userInput, sceneId } = schema.parse({
    userInput: form.get("userInput"),
    sceneId: form.get("sceneId"),
  });
  const scene = getScene(sceneId);
  invariant(scene.interaction, "scene.interaction not found");

  const action = resolveInteraction(userInput, scene.interaction);
  if (action.type === "changeScene") {
    return redirect(`/${action.sceneId}`);
  }
  return null;
}

export default function Scene() {
  const { scene } = useLoaderData<ILoaderData>();

  const { id, title, description, link, interaction } = scene;

  return (
    <div>
      <section className="scene">
        {title && <h2 className="scene__title">{title}</h2>}
        {description && <p className="scene__description">{description}</p>}
        {link && (
          <Link to={link.to} className="scene__link">
            {link.text}
          </Link>
        )}
        {interaction && (
          <Form method="post">
            <input type="hidden" name="sceneId" value={id} />
            <label>
              What do you want to do?
              <input type="text" name="userInput" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </section>
    </div>
  );
}
