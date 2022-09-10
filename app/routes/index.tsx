import { Link } from "@remix-run/react";
import { STARTING_SCENE_ID } from "~/data";

export default function Index() {
  return (
    <section>
      <h2>Story teller</h2>
      <Link to={`/${STARTING_SCENE_ID}`}>Start Adventure</Link>
    </section>
  );
}
