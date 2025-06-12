function IsSafe({
  matrixSize,
  currRow,
  currCol,
  blocksRowsArr,
  blocksColsArr,
  visitedRow,
  visitedCol,
}) {
  var returnAns = true;
  if (
    currRow >= 0 &&
    currRow < matrixSize &&
    currCol >= 0 &&
    currCol < matrixSize
  ) {
    blocksRowsArr.forEach((rowVal, index) => {
      if (currRow === rowVal && blocksColsArr[index] === currCol) {
        returnAns = false;
      }
    });
    if (returnAns) {
      visitedRow.forEach((rowVal, index) => {
        if (currRow === rowVal && visitedCol[index] === currCol) {
          returnAns = false;
        }
      });
    }
    return returnAns;
  }
  return false;
}

module.exports = IsSafe;
