/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Button from "@mui/material/Button";

const NameLinkPart = ({ name, github, live }) => {
  return (
    <div className="w-full p-1 font-helloWordsFont">
      <div className="w-full text-2xl md:text-4xl py-px">{name}</div>
      <div className="h-0.5 w-full bg-stone-800" />
      <div className="flex w-full py-2 justify-evenly">
        {github.length > 1 && (
          <>
            <a href={github} target="blank">
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                style={{ backgroundColor: "#602080" }}
                size={window.innerWidth < 768 ? "small" : "medium"}
              >
                GitHub
              </Button>
            </a>
            <div className="h-10 w-0.5 bg-stone-800" />
          </>
        )}
        {live.length > 1 && (
          <a href={live} target="blank">
            <Button
              variant="contained"
              startIcon={<PublicIcon />}
              style={{ backgroundColor: "#602080" }}
              size={window.innerWidth < 768 ? "small" : "medium"}
            >
              Live
            </Button>
          </a>
        )}
      </div>
      <div className="h-0.5 w-full bg-stone-800" />
    </div>
  );
};

export default NameLinkPart;
