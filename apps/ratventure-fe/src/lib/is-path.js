export default function IsPath(colArray, rowArray, point) {
  const pointPresent = rowArray.some((rowVal, index) => {
    const colVal = colArray[index];

    if (point === `${rowVal}_${colVal}`) return true;
  });

  if (pointPresent) return true;

  return false;
}
