import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

const TechWrite = () => {
  return (
    <Link to={"/technical_notes"}>
      <div className="bg-[url('/images/techImage.png')] w-32 h-32 bg-no-repeat bg-contain bg-center flex items-center justify-center animate-spinSlow mt-6 cursor-pointer">
        <div className="animate-spinRev">
          <LaunchIcon className="text-[#9c27b0] hover:text-[#7b1fa2]" />
        </div>
      </div>
    </Link>
  );
};

export default TechWrite;
