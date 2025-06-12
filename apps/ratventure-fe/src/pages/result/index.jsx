import Wrapper from "@/components/common/wrapper";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ProblemMatrix from "@/components/result/problem-matrix";
import CircularProgress from "@mui/material/CircularProgress";
import SolutionMatrix from "@/components/result/solution-matrix";
import NoSolution from "@/components/result/no-solution";
import Solve from "@/apis/solve";

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const [solvedMatrix, setSolvedMatrix] = useState();

  const { matrixSize, startingPoint, blocks, endingPoint } =
    location.state || {};

  useEffect(() => {
    if (!matrixSize) {
      alert("Please choose matrix size first!");
      navigate("/set-matrix");
      return;
    }
    if (!startingPoint) {
      alert("Please choose starting point first!");
      navigate("/starting-point");
      return;
    }
    if (!blocks?.length) {
      alert("Please choose blocks first!");
      navigate("/blocks");
      return;
    }
    if (!endingPoint) {
      alert("Please choose ending point first!");
      navigate("/ending-point");
      return;
    }

    const fetchSolution = async () => {
      const response = await Solve({
        matrixSize,
        startingPoint,
        blocks,
        endingPoint,
      });
      setSolvedMatrix(response);
    };

    fetchSolution();
  }, [matrixSize, navigate, startingPoint, blocks, endingPoint]);

  return (
    <Wrapper>
      <p>The problem :</p>
      <ProblemMatrix
        blocks={blocks}
        matrixSize={matrixSize}
        endingPoint={endingPoint}
        startingPoint={startingPoint}
      />

      {solvedMatrix ? (
        solvedMatrix.solution.solutionCols &&
        solvedMatrix.solution.solutionCols.length > 0 &&
        solvedMatrix.solution.solutionRows &&
        solvedMatrix.solution.solutionRows.length > 0 ? (
          <SolutionMatrix solution={solvedMatrix.solution} />
        ) : (
          <NoSolution />
        )
      ) : (
        <CircularProgress />
      )}
    </Wrapper>
  );
}
