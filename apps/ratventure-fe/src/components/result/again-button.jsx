import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function AgainButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/set-matrix");
      }}
    >
      Let's Do It Again
    </Button>
  );
}
