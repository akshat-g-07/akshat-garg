import { useEffect, useState } from "react";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  WifiProtectedSetup,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router";

import Tile from "@/components/common/tile";
import Wrapper from "@/components/common/wrapper";

import jerry from "../../assets/jerry.png";

export default function StartingPoint() {
  const navigate = useNavigate();
  const location = useLocation();

  const { matrixSize } = location.state || {};
  const [startingPoint, setStartingPoint] = useState("-1_-1");

  useEffect(() => {
    if (!matrixSize) {
      alert("Please choose matrix size first!");
      navigate("/set-matrix");
    }
  }, [matrixSize, navigate]);

  return (
    <Wrapper>
      <p className="mb-8">Place the Starting Point :</p>
      {[...new Array(matrixSize)].map((_, indx) => (
        <div key={indx} className="flex">
          {[...new Array(matrixSize)].map((_, i) => (
            <Tile
              key={`${indx}_${i}`}
              src={jerry}
              alt="jerry"
              highlighted={`${indx}_${i}` === startingPoint}
              onClick={() => {
                setStartingPoint((prev) =>
                  prev === `${indx}_${i}` ? "-1_-1" : `${indx}_${i}`
                );
              }}
            />
          ))}
        </div>
      ))}
      <Button
        variant="contained"
        endIcon={<WifiProtectedSetup />}
        onClick={() => {
          const rowVal = Math.floor(Math.random() * matrixSize);
          const colVal = Math.floor(Math.random() * matrixSize);
          setStartingPoint(`${rowVal}_${colVal}`);
        }}
        sx={{ marginTop: "40px" }}
      >
        Generate Random
      </Button>

      <div className="flex w-full max-w-75 md:max-w-125 justify-between my-20">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNew />}
          onClick={() => {
            navigate("/set-matrix");
          }}
        >
          Back
        </Button>

        <Button
          disabled={startingPoint === "-1_-1"}
          variant="contained"
          endIcon={<ArrowForwardIos />}
          onClick={() => {
            navigate("/blocks", {
              state: {
                matrixSize,
                startingPoint,
              },
            });
          }}
        >
          Next
        </Button>
      </div>
    </Wrapper>
  );
}
