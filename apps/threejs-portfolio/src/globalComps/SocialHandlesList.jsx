import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const SocialHandlesList = [
  {
    icon: <EmailIcon sx={{ color: "white" }} />,
    name: "E Mail",
    value: "mailto:akshatg805@gmail.com",
  },
  {
    icon: <LinkedInIcon sx={{ color: "white" }} />,
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/akshat-garg-580322241/",
  },
  {
    icon: <GitHubIcon sx={{ color: "white" }} />,
    name: "GitHub",
    value: "https://www.github.com/akshat-g-07/",
  },
  {
    icon: <XIcon sx={{ color: "white" }} />,
    name: "X(Twitter)",
    value: "https://twitter.com/akku_g__",
  },
];

export default SocialHandlesList;
