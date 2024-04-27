import SocialHandlesList from "./SocialHandlesList";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";

const SocialHandles = () => {
  return (
    <div className="h-screen fixed left-1 md:left-5 flex flex-col justify-evenly z-10">
      {SocialHandlesList.map((item, index) => {
        return (
          <motion.div
            key={index}
            animate={{ x: [-100, 0], scale: [0.3, 1] }}
            transition={{ type: "spring", delay: 0.1 * index + 2.5 }}
            onClick={() => {
              window.open(item.value, "_blank");
            }}
            className="cursor-pointer animate-pulse"
          >
            <Tooltip title={item.name} arrow>
              {item.icon}
            </Tooltip>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SocialHandles;
