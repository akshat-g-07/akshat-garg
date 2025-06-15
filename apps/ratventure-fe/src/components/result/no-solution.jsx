import sadJerry from "../../assets/sad-jerry.png";
import AgainButton from "./again-button";

export default function NoSolution() {
  return (
    <>
      <p className="font-bold text-lg"> There are no solutions!</p>
      <img src={sadJerry} className="h-50" />
      <AgainButton />
    </>
  );
}
