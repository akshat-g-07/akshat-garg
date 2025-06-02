import { Info, ArrowForwardIos } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();
  const rules = [
    "Pick the size of matrix.",
    "Pick the starting point.",
    "Pick the blocks positions'.",
    "Pick the ending point.",
  ];
  return (
    <>
      <section className="space-y-16 p-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold">RatVenture</h1>
          <p className="w-1/2 text-3xl">
            Ratventure is an entertaining web application that brings the
            classic
            <span className="mx-2 font-semibold">Rat In A Maze</span> problem to
            life.
          </p>
        </div>
        <div>
          <h3 className="mb-2 underline font-bold text-lg">How to play:</h3>
          {rules.map((rule, index) => (
            <p key={index}>{rule}</p>
          ))}
          <p className="text-neutral-700 underline mt-2">
            <Info sx={{ fontSize: "1.25rem" }} />
            <span>You can generate above entities randomly too!</span>
          </p>
        </div>
        <Button
          variant="contained"
          sx={{ minHeight: "50px" }}
          endIcon={<ArrowForwardIos />}
          onClick={() => {
            navigate("/set-matrix");
          }}
        >
          Let the Ratventure begin!
        </Button>
      </section>
    </>
  );
}
