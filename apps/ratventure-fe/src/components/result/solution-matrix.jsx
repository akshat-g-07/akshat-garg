import AgainButton from "./again-button";
import IndividualMatrix from "./individual-matrix";

export default function SolutionMatrix({
  solution: { solutionCols, solutionRows },
}) {
  return (
    <>
      {solutionCols.map((colArray, index) => {
        return (
          <IndividualMatrix
            key={index}
            title={`Solution ${index + 1}`}
            colArray={colArray}
            rowArray={solutionRows[index]}
          />
        );
      })}

      <AgainButton />
    </>
  );
}
