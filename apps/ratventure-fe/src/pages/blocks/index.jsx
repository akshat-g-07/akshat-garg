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

import block from "../../assets/block.png";
import jerry from "../../assets/jerry.png";

export default function Blocks() {
  const navigate = useNavigate();
  const location = useLocation();
  const [blocks, setBlocks] = useState([]);

  const { matrixSize, startingPoint } = location.state || {};

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
  }, [matrixSize, navigate, startingPoint]);

  return (
    <Wrapper>
      <p className="mb-8">Place the Blocks :</p>
      {[...new Array(matrixSize)].map((_, indx) => (
        <div key={indx} className="flex">
          {[...new Array(matrixSize)].map((_, i) => (
            <Tile
              alt={startingPoint === `${indx}_${i}` ? "jerry" : "block"}
              key={`${indx}_${i}`}
              src={startingPoint === `${indx}_${i}` ? jerry : block}
              className={
                startingPoint !== `${indx}_${i}` && "[&_img]:object-cover"
              }
              highlighted={
                `${indx}_${i}` === startingPoint ||
                blocks.includes(`${indx}_${i}`)
              }
              onClick={() => {
                if (startingPoint === `${indx}_${i}`) {
                  alert("You can not place a block on starting point!");
                  return;
                }

                if (blocks.includes(`${indx}_${i}`))
                  setBlocks((prev) =>
                    prev.filter((item) => item !== `${indx}_${i}`)
                  );
                else setBlocks((prev) => [...prev, `${indx}_${i}`]);
              }}
            />
          ))}
        </div>
      ))}
      <Button
        variant="contained"
        endIcon={<WifiProtectedSetup />}
        onClick={() => {
          const numberOfBlocks = Math.ceil(
            Math.random() * matrixSize * matrixSize
          );
          const blockPositions = [];
          [...new Array(numberOfBlocks)].forEach(() => {
            const rowVal = Math.floor(Math.random() * matrixSize);
            const colVal = Math.floor(Math.random() * matrixSize);

            if (
              startingPoint !== `${rowVal}_${colVal}` &&
              !blockPositions.includes(`${rowVal}_${colVal}`)
            )
              blockPositions.push(`${rowVal}_${colVal}`);
          });
          setBlocks(blockPositions);
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
            navigate("/starting-point", {
              state: {
                matrixSize,
              },
            });
          }}
        >
          Back
        </Button>

        <Button
          disabled={!blocks.length}
          variant="contained"
          endIcon={<ArrowForwardIos />}
          onClick={() => {
            navigate("/ending-point", {
              state: {
                matrixSize,
                startingPoint,
                blocks,
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
