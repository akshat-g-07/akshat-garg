import { useState } from "react";
import { motion } from "framer-motion";
const HobbyBody = () => {
  const [imageName, setImageName] = useState("");
  return (
    <div className="mt-6 lg:flex lg:justify-between text-justify">
      <div className="w-4/5 lg:w-1/3">
        <motion.div
          className="text-white font-firstDescription text-xl cursor-pointer"
          onHoverStart={() => {
            setImageName("paragliding.jpeg");
          }}
          onHoverEnd={() => {
            setImageName("");
          }}
        >
          1. Paragliding
          <p className="text-stone-400 font-extrabold font-secondDescription ml-4 mb-3 text-base">
            I am a P2 Pilot 🪂
          </p>
        </motion.div>
        <motion.div
          className="text-white font-firstDescription text-xl cursor-pointer"
          onHoverStart={() => {
            setImageName("gaming.JPG");
          }}
          onHoverEnd={() => {
            setImageName("");
          }}
        >
          2. Gaming
          <p className="text-stone-400 font-extrabold font-secondDescription ml-4 mb-3 text-base">
            I mean, it's fun, sometimes 😶‍🌫️
          </p>
        </motion.div>
        <motion.div
          className="text-white font-firstDescription text-xl cursor-pointer"
          onHoverStart={() => {
            setImageName("dancing.jpg");
          }}
          onHoverEnd={() => {
            setImageName("");
          }}
        >
          3. Dancing
          <p className="text-stone-400 lg:text-stone-800 font-extrabold font-secondDescription ml-4 mb-3 text-base">
            Now you understand the 3D Model😉
          </p>
        </motion.div>
        <motion.div
          className="text-white font-firstDescription text-xl cursor-pointer"
          onHoverStart={() => {
            setImageName("trekking.jpeg");
          }}
          onHoverEnd={() => {
            setImageName("");
          }}
        >
          4. Trekking
          <p className="text-left text-stone-400 lg:text-stone-800 font-extrabold font-secondDescription ml-4 mb-3 text-base">
            Amarnath Yatra, Valley of Flowers, Tungnath Chandrashila, Nag Tibba
            are few names from the long list of hikes/treks I have done 🚶‍♂️
          </p>
        </motion.div>
      </div>
      <div
        className="none lg:block lg:w-4/12 bg-cover rounded-3xl bg-no-repeat bg-center"
        style={{ backgroundImage: `url("/images/${imageName}")` }}
      ></div>
    </div>
  );
};

export default HobbyBody;
