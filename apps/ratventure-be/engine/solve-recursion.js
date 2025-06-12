const IsSafe = require("./is-safe");

function SolveRecursion({
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
}) {
  if (startRow === endRow && startCol === endCol) {
    solution.solutionRows.push(visitedRow.slice());
    solution.solutionCols.push(visitedCol.slice());
    return true;
  }

  visitedRow.push(startRow);
  visitedCol.push(startCol);

  if (
    IsSafe({
      matrixSize,
      currRow: startRow + 1,
      currCol: startCol,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveRecursion({
      matrixSize,
      startRow: startRow + 1,
      startCol,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  if (
    IsSafe({
      matrixSize,
      currRow: startRow - 1,
      currCol: startCol,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveRecursion({
      matrixSize,
      startRow: startRow - 1,
      startCol,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  if (
    IsSafe({
      matrixSize,
      currRow: startRow,
      currCol: startCol + 1,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveRecursion({
      matrixSize,
      startRow,
      startCol: startCol + 1,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  if (
    IsSafe({
      matrixSize,
      currRow: startRow,
      currCol: startCol - 1,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveRecursion({
      matrixSize,
      startRow,
      startCol: startCol - 1,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  visitedRow.pop();
  visitedCol.pop();
}

module.exports = SolveRecursion;
