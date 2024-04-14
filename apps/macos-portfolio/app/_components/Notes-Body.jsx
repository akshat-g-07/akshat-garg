"use client";

import { useState } from "react";
import Treklicious from "./Treklicious";
import Ratventure from "./Ratventure";
import Grillzilla from "./Grillzilla";

export default function NotesBody() {
  const [projectToShow, setProjectToShow] = useState();
  return (
    <>
      <div
        id="notes-body"
        className="h-[92.5%] w-full bg-blue-500 overflow-y-auto flex"
      >
        <div className="h-full w-1/3 bg-red-500">
          <div
            id="treklicious"
            className="border-b-2 w-full h-fit py-2 cursor-pointer"
            onClick={(event) => {
              document
                .getElementById("ratventure")
                .classList.remove("bg-yellow-500");
              document
                .getElementById("grillzilla")
                .classList.remove("bg-yellow-500");
              document
                .getElementById("treklicious")
                .classList.add("bg-yellow-500");
              setProjectToShow("treklicious");
            }}
          >
            <p className="text-xl font-semibold">TrekLicious</p>
            <p className="text-xs">
              ReactJS | NodeJS | Express | MongoDB | MUI
            </p>
          </div>
          <div
            id="ratventure"
            className="border-b-2 w-full h-fit py-2 cursor-pointer"
            onClick={(event) => {
              document
                .getElementById("treklicious")
                .classList.remove("bg-yellow-500");
              document
                .getElementById("grillzilla")
                .classList.remove("bg-yellow-500");
              document
                .getElementById("ratventure")
                .classList.add("bg-yellow-500");
              setProjectToShow("ratventure");
            }}
          >
            <p className="text-xl font-semibold">RatVenture</p>
            <p className="text-xs">ReactJs | NodeJS | Express | Javascript</p>
          </div>
          <div
            id="grillzilla"
            className="border-b-2 w-full h-fit py-2 cursor-pointer"
            onClick={(event) => {
              document
                .getElementById("treklicious")
                .classList.remove("bg-yellow-500");
              document
                .getElementById("ratventure")
                .classList.remove("bg-yellow-500");
              document
                .getElementById("grillzilla")
                .classList.add("bg-yellow-500");
              setProjectToShow("grillzilla");
            }}
          >
            <p className="text-xl font-semibold">GrillZilla</p>
            <p className="text-xs">ReactJs | API | Axios</p>
          </div>
        </div>
        <div className="h-full w-2/3 bg-amber-500">
          {projectToShow === "treklicious" ? (
            <Treklicious />
          ) : projectToShow === "ratventure" ? (
            <Ratventure />
          ) : projectToShow === "grillzilla" ? (
            <Grillzilla />
          ) : (
            <>
              <div className="w-full h-full flex justify-center items-center opacity-50">
                <p>Select a project to see the details of it.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
