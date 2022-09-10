import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <section>
      <h2>Story teller</h2>
      <Link to={`/START`}>Start Adventure</Link>
    </section>
  );
}
