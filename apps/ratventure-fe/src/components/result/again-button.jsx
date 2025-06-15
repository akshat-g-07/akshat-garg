import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

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
