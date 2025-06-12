import jerry from "../../assets/jerry.png";
import block from "../../assets/block.png";
import cheese from "../../assets/cheese.png";
import Tile from "@/components/common/tile";
import Wrapper from "@/components/common/wrapper";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  WifiProtectedSetup,
} from "@mui/icons-material";

export default function EndingPoint() {
  const navigate = useNavigate();
  const location = useLocation();

  const { matrixSize, startingPoint, blocks } = location.state || {};
  const [endingPoint, setEndingPoint] = useState("-1_-1");

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
  }, [matrixSize, navigate, startingPoint, blocks]);

  return (
    <Wrapper>
      <p className="mb-8">Place the Ending Point :</p>
      {[...new Array(matrixSize)].map((_, indx) => (
        <div key={indx} className="flex">
          {[...new Array(matrixSize)].map((_, i) => (
            <Tile
              key={`${indx}_${i}`}
              src={
                `${indx}_${i}` === startingPoint
                  ? jerry
                  : blocks?.includes(`${indx}_${i}`)
                    ? block
                    : cheese
              }
              alt={
                `${indx}_${i}` === startingPoint
                  ? "jerry"
                  : blocks?.includes(`${indx}_${i}`)
                    ? "block"
                    : "cheese"
              }
              highlighted={
                `${indx}_${i}` === startingPoint ||
                blocks?.includes(`${indx}_${i}`) ||
                `${indx}_${i}` === endingPoint
              }
              onClick={() => {
                if (startingPoint === `${indx}_${i}`) {
                  alert("You can not choose starting point as ending point!");
                  return;
                }
                if (blocks?.includes(`${indx}_${i}`)) {
                  alert("You can not choose ending point on a block!");
                  return;
                }
                setEndingPoint((prev) =>
                  prev === `${indx}_${i}` ? "-1_-1" : `${indx}_${i}`
                );
              }}
              className={
                blocks?.includes(`${indx}_${i}`) && "[&_img]:object-cover"
              }
            />
          ))}
        </div>
      ))}
      <Button
        variant="contained"
        endIcon={<WifiProtectedSetup />}
        onClick={() => {
          while (true) {
            const rowVal = Math.floor(Math.random() * matrixSize);
            const colVal = Math.floor(Math.random() * matrixSize);

            if (
              `${rowVal}_${colVal}` !== startingPoint &&
              !blocks?.includes(`${rowVal}_${colVal}`)
            ) {
              setEndingPoint(`${rowVal}_${colVal}`);
              break;
            }
          }
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
            navigate("/blocks", {
              state: {
                matrixSize,
                startingPoint,
              },
            });
          }}
        >
          Back
        </Button>

        <Button
          disabled={endingPoint === "-1_-1"}
          variant="contained"
          endIcon={<ArrowForwardIos />}
          onClick={() => {
            navigate("/result", {
              state: {
                matrixSize,
                startingPoint,
                blocks,
                endingPoint,
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
