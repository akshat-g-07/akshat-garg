import { seasonLines, stateLines, difficultyLines } from "./section-heading";
import TrekCategoryGenerator from "./trek-category-generator";
import Treks from "@/assets/Treks.json";

const usedSectionHeads = [];

const getUniqueSectionHead = (lines) => {
  let index = Math.floor(Math.random() * lines.length);
  while (usedSectionHeads.includes(lines[index])) {
    index = Math.floor(Math.random() * lines.length);
  }
  return lines[index];
};

const GenerateStateLine = (stateName) => {
  const value = getUniqueSectionHead(stateLines);
  usedSectionHeads.push(value);

  const sectionArray = Treks.filter((trek) => trek.state === stateName).slice(
    0,
    10
  );

  return {
    filterParameter: "state",
    filterValue: stateName,
    sectionHead: value + stateName,
    sectionArray: sectionArray,
  };
};

const GenerateSeasonLine = (seasonName) => {
  const value = getUniqueSectionHead(seasonLines);
  usedSectionHeads.push(value);

  const sectionArray = Treks.filter((trek) => trek.season === seasonName).slice(
    0,
    10
  );

  return {
    filterParameter: "season",
    filterValue: seasonName,
    sectionHead: value + seasonName,
    sectionArray: sectionArray,
  };
};

const GenerateDifficultyLine = (difficultyName) => {
  const value = getUniqueSectionHead(difficultyLines);
  usedSectionHeads.push(value);

  const sectionArray = Treks.filter(
    (trek) => trek.difficulty === difficultyName
  ).slice(0, 10);

  return {
    filterParameter: "difficulty",
    filterValue: difficultyName,
    sectionHead: value + difficultyName + " Treks",
    sectionArray: sectionArray,
  };
};

const ComponentGenerator = () => {
  const trekCategory = TrekCategoryGenerator(Treks);
  const componentValue = [];

  trekCategory.forEach((category) => {
    const [[key, value]] = Object.entries(category);
    componentValue.push(
      key === "state"
        ? GenerateStateLine(value)
        : key === "season"
          ? GenerateSeasonLine(value)
          : GenerateDifficultyLine(value)
    );
  });

  return componentValue;
};

export default ComponentGenerator;
