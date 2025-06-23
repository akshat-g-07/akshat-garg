import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/material/Button";

const ResumeButton = () => {
  return (
    <Button
      color="secondary"
      variant="contained"
      endIcon={<LaunchIcon />}
      className="h-10"
    >
      <a href="/resume/Akshat_Garg_Resume.pdf" download={true} target="_blank">
        Resume
      </a>
    </Button>
  );
};

export default ResumeButton;
