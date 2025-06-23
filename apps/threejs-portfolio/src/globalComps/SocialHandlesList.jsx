import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Contact } from "@repo/portfolio-details";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const ref = cookies.ref;

// Check both cookie and URL param for 'rec'
let isRec = ref === "rec";
if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  const refVal = urlParams.get("ref");
  if (refVal === "rec") isRec = true;
}

const SocialHandlesList = [
  {
    icon: <EmailIcon sx={{ color: "white" }} />,
    name: "E Mail",
    value: `mailto:${Contact}`,
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

export default isRec ? SocialHandlesList.slice(0, 3) : SocialHandlesList;
