import { useState } from "react";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Wrapper from "@/components/common/wrapper";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  WifiProtectedSetup,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function SetMatrix() {
  const navigate = useNavigate();
  const [matrixSize, setMatrixSize] = useState(5);

  const handleSliderChange = (event, newValue) => {
    setMatrixSize(newValue);
  };

  const handleInputChange = (event) => {
    setMatrixSize(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (matrixSize < 3) {
      setMatrixSize(3);
    } else if (matrixSize > 9) {
      setMatrixSize(9);
    }
  };

  return (
    <Wrapper>
      <div className="flex space-x-2">
        <p>Enter the Size of Matrix :</p>
        <Input
          value={matrixSize}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 3,
            max: 9,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
          sx={{ width: "35px" }}
        />
      </div>
      <div className="max-w-75 w-full mt-6 mb-10">
        <Slider
          value={typeof matrixSize === "number" ? matrixSize : 3}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={3}
          max={9}
        />
      </div>
      <Button
        variant="contained"
        endIcon={<WifiProtectedSetup />}
        onClick={() => {
          setMatrixSize(Math.ceil(Math.random() * 7) + 2);
        }}
      >
        Generate Random
      </Button>

      <div className="flex w-full max-w-75 md:max-w-125 justify-between my-20">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNew />}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIos />}
          onClick={() => {
            navigate("starting-point", {
              state: {
                matrixSize,
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
