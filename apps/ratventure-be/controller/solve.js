const SolveEngine = require("../engine");

async function Solve(req, res) {
  const { matrixSize, startingPoint, blocks, endingPoint } = req.query;

  if (!matrixSize || !startingPoint || !blocks || !endingPoint)
    res.sendStatus(400);

  const blocksArr = blocks.split(",");

  const matrixSizeN = parseInt(matrixSize);
  const startRowN = parseInt(startingPoint.split("_")[0]);
  const startColN = parseInt(startingPoint.split("_")[1]);
  const blocksRowsArr = blocksArr.map((block) => parseInt(block.split("_")[0]));
  const blocksColsArr = blocksArr.map((block) => parseInt(block.split("_")[1]));
  const endRowN = parseInt(endingPoint.split("_")[0]);
  const endColN = parseInt(endingPoint.split("_")[1]);

  const solution = SolveEngine({
    matrixSize: matrixSizeN,
    startRow: startRowN,
    startCol: startColN,
    blocksRowsArr,
    blocksColsArr,
    endRow: endRowN,
    endCol: endColN,
  });

  res.status(200).json({ solution });
}

module.exports = Solve;
