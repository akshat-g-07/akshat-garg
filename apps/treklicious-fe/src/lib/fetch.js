export default async function (...args) {
  const res = await fetch(...args);
  console.log("res fetch", res);

  const json = await res.json();

  console.log("res fetch1", json);
  return json;
}
