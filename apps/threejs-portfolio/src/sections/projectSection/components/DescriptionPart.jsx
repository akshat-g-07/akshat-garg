import { useState } from "react";
import { Collapsible } from "@chakra-ui/react";

const DescriptionPart = ({ description }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mx-1">
      <Collapsible.Root
        collapsedHeight={50}
        open={show}
        style={{ padding: "0px 2px", marginTop: "5px" }}
      >
        <Collapsible.Content>
          <ul className="list-disc pl-4">
            {description.map((desc) => {
              return <li key={desc}>{desc}</li>;
            })}
          </ul>
        </Collapsible.Content>
      </Collapsible.Root>
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
