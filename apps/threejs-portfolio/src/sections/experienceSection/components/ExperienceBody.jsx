import { ListItem, UnorderedList } from "@chakra-ui/react";
import Experience from "./Experience";

const ExperienceBody = () => {
  return (
    <div className="flex mt-5">
      <div className="h-auto w-0.5 lg:w-1 bg-[#ab20fd] shadow-[0px_0px_20px_2px_#C45AEC]" />
      {Experience.map((item) => {
        return (
          <div
            key={item}
            className="h-auto w-4/5 lg:w-7/12 bg-stone-600 p-2 ml-1"
          >
            <div className="text-lg lg:text-2xl font-bold font-firstDescription">
              {item.role}
              <div className="h-0.5 w-full md:w-7/12 bg-stone-400" />
            </div>
            <div className="text-base lg:text-xl font-bold font-secondDescription">
              @ {item.company}
            </div>
            <div className="text-[0.65rem] lg:text-sm font-secondDescription">
              {item.duration}
              <div className="h-0.5 w-full md:w-7/12 bg-stone-400" />
            </div>
            <div className="hidden lg:block text-stone-400">
              <UnorderedList>
                {item.description.map((desc) => {
                  return <ListItem key={desc}>{desc}</ListItem>;
                })}
              </UnorderedList>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceBody;
