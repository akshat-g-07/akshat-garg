import PostsArray from "./PostsArray";
import { motion, useScroll } from "framer-motion";

const Posts = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="bg-[#ab20fd] w-[5px] fixed top-36 origin-top rounded-md left-1 md:left-1/2 h-full z-10"
      />
      <div className="w-full flex flex-col items-center py-10 justify-center">
        {PostsArray.map((item, index) => {
          return (
            <motion.div
              key={item}
              className={
                index % 2 === 0
                  ? "h-96 w-11/12 md:w-5/12 md:relative md:right-1/4 bg-[#0D0564] my-5 p-3 rounded-md origin-left md:origin-right"
                  : "h-96 w-11/12 md:w-5/12 md:relative md:left-1/4 bg-[#0D0564] my-5 p-3 rounded-md origin-left"
              }
              transition={{
                duration: 2,
                delay: 0.5,
                type: "spring",
              }}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src={item}
                width={"100%"}
                height={"100%"}
                className="rounded-md"
              ></iframe>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
