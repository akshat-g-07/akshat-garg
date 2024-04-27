import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Header = ({ setSubSection }) => {
  const sectionNames = ["post", "sand", "pen"];
  const changeSubSection = (idVal) => {
    let unselectedSectionNames = sectionNames.filter((item) => item != idVal);
    unselectedSectionNames.forEach((item) => {
      document.getElementById(item).classList.remove("bg-[#ab20fd]");
      document.getElementById(item).classList.remove("text-slate-200");
      document.getElementById(item).classList.remove("font-bold");
      document.getElementById(item).classList.add("lg:hover:text-slate-500");
    });

    document.getElementById(idVal).classList.add("bg-[#ab20fd]");
    document.getElementById(idVal).classList.add("text-slate-200");
    document.getElementById(idVal).classList.add("font-bold");
    document.getElementById(idVal).classList.remove("lg:hover:text-slate-500");
    setSubSection(idVal);
  };
  return (
    <>
      <header className="fixed top-0 w-screen h-auto flex flex-col items-center z-10 bg-[#0d051a]">
        <div className="flex w-full m-2 items-baseline text-white">
          <div className="w-1/5 lg:w-1/12">
            <Link to={"/"}>
              <ArrowBackIcon sx={{ fontSize: "17.5px" }} />
              Back
            </Link>
          </div>
          <div className="w-4/5 lg:w-11/12 lg:pr-28 text-2xl font-helloWordsFont lg:text-center">
            My Technical Notes!
          </div>
        </div>
        <div className="w-full h-[1px] mt-1 bg-white" />
        <div className="flex w-full lg:w-3/5 my-4 py-2 rounded-md bg-[#0D0564] text-slate-500 lg:text-slate-600 lg:cursor-pointer">
          <div
            id="post"
            className="w-1/3 transition-[background-color] duration-[500ms] py-2 rounded-md text-center lg:hover:font-bold bg-[#ab20fd]
            text-slate-200
            font-bold"
            onClick={() => {
              changeSubSection("post");
            }}
          >
            LinkedIn Posts
          </div>
          <div
            id="sand"
            className="w-1/3 transition-[background-color] duration-[500ms] py-2 rounded-md text-center lg:hover:font-bold lg:hover:text-slate-500"
            onClick={() => {
              alert("Under Development!");
              // changeSubSection("sand");
            }}
          >
            CodeSandbox
          </div>
          <div
            id="pen"
            className="w-1/3 transition-[background-color] duration-[500ms] py-2 rounded-md text-center lg:hover:font-bold lg:hover:text-slate-500"
            onClick={() => {
              alert("Under Development!");
              // changeSubSection("pen");
            }}
          >
            CodePen
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
