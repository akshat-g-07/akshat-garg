"use client";

import { useState } from "react";
import { Projects } from "@repo/portfolio-details";

import NotesProject from "./Notes-Project";

export default function NotesBody() {
  const [projectToShow, setProjectToShow] = useState(-1);
  return (
    <>
      <div id="notes-body" className="h-[92.5%] w-full overflow-y-auto flex">
        <div className="h-full w-1/3 bg-gray-200 pl-4 border-black border-r py-2">
          {Projects.map((project, indx) => (
            <div
              id={project.name}
              className="border-black border-b w-full h-fit p-2 cursor-pointer"
              onClick={(event) => {
                Projects.forEach((projct) => {
                  if (projct.name === project.name)
                    document
                      .getElementById(projct.name)
                      .classList.add("bg-yellow-500");
                  else
                    document
                      .getElementById(projct.name)
                      .classList.remove("bg-yellow-500");
                });

                setProjectToShow(indx);
              }}
            >
              <p className="text-xl mb-1 font-semibold font-tInput">
                {project.name}
              </p>
              <p className="text-xs font-tOutput">
                {project.skills.join(" | ")}
              </p>
            </div>
          ))}
        </div>
        <div className="h-full w-2/3 bg-white p-4">
          {projectToShow === -1 ? (
            <>
              <div className="w-full h-full flex justify-center items-center opacity-50">
                <p>Select a project to see the details of it.</p>
              </div>
            </>
          ) : (
            <NotesProject project={Projects[projectToShow]} />
          )}
        </div>
      </div>
    </>
  );
}
