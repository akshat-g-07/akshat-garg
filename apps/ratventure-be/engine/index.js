const SolveRecursion = require("./solve-recursion");

function SolveEngine({
  matrixSize,
  startRow,
  startCol,
  blocksRowsArr,
  blocksColsArr,
  endRow,
  endCol,
}) {
  const solution = { solutionRows: [], solutionCols: [] };
  const visitedRow = [];
  const visitedCol = [];

  SolveRecursion({
    matrixSize,
    startRow,
    startCol,
    blocksRowsArr,
    blocksColsArr,
    endRow,
    endCol,
    solution,
    visitedRow,
    visitedCol,
  });

  return solution;
}

module.exports = SolveEngine;
