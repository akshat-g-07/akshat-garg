const API_HOST = import.meta.env.VITE_API_HOST;

export default async function Solve({
  matrixSize,
  startingPoint,
  blocks,
  endingPoint,
}) {
  const url = new URL(API_HOST + "/solve");

  url.searchParams.append("matrixSize", matrixSize);
  url.searchParams.append("startingPoint", startingPoint);
  url.searchParams.append("blocks", blocks);
  url.searchParams.append("endingPoint", endingPoint);

  return await (await fetch(url)).json();
}
