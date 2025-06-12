import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function AgainButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate("/set-matrix");
      }}
      style={{
        marginTop: "50px",
      }}
    >
      Let's Do It Again
    </Button>
  );
}
