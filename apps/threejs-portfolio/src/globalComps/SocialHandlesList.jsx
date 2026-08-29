import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Contact } from "@repo/portfolio-details";

const SocialHandlesList = [
  {
    icon: <EmailIcon sx={{ color: "white" }} />,
    name: "E Mail",
    value: `mailto:${Contact.email}`,
  },
  {
    icon: <LinkedInIcon sx={{ color: "white" }} />,
    name: "LinkedIn",
    value: Contact.linkedin,
  },
  {
    icon: <GitHubIcon sx={{ color: "white" }} />,
    name: "GitHub",
    value: Contact.github,
  },
  {
    icon: <XIcon sx={{ color: "white" }} />,
    name: "X(Twitter)",
    value: Contact.x,
  },
];

export default SocialHandlesList;
