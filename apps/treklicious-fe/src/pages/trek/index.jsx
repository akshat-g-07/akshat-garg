import { useLoaderData } from "react-router";

export default function Trek() {
  const data = useLoaderData();
  const trek = data.trek;
  console.log("trek", trek);

  return <div></div>;
}
