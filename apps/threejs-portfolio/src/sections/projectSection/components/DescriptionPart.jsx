/* eslint-disable react/prop-types */
import { useState } from "react";
import { Collapse } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const DescriptionPart = ({ description }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mx-1">
      <Collapse
        startingHeight={50}
        in={show}
        style={{ padding: "0px 2px", marginTop: "5px" }}
      >
        <UnorderedList>
          {description.map((desc) => {
            return <ListItem key={desc}>{desc}</ListItem>;
          })}
        </UnorderedList>
      </Collapse>
      <div
        className="font-bold text-stone-300 py-2 cursor-pointer w-20 md:w-28 overflow-x-hidden"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show {show ? "Less" : "More"}
      </div>
    </div>
  );
};

export default DescriptionPart;
