import { seasonLines, stateLines, difficultyLines } from "./section-heading";
import TrekCategoryGenerator from "./trek-category-generator";

const usedSectionHeads = [];

const getUniqueSectionHead = (lines) => {
  let index = Math.floor(Math.random() * lines.length);
  while (usedSectionHeads.includes(lines[index])) {
    index = Math.floor(Math.random() * lines.length);
  }
  return lines[index];
};

const GenerateStateLine = (Treks, stateName) => {
  const value = getUniqueSectionHead(stateLines);
  usedSectionHeads.push(value);

  const sectionArray = Treks.filter((trek) => trek.state === stateName).slice(
    0,
    10
  );

  return {
    filterParameter: "State",
    filterValue: stateName,
    sectionHead: value + stateName,
    sectionArray: sectionArray,
  };
};

const GenerateSeasonLine = (Treks, seasonName) => {
  const value = getUniqueSectionHead(seasonLines);
  usedSectionHeads.push(value);

  const sectionArray = Treks.filter((trek) => trek.season === seasonName).slice(
    0,
    10
  );

  return {
    filterParameter: "Season",
    filterValue: seasonName,
    sectionHead: value + seasonName,
    sectionArray: sectionArray,
  };
};

const GenerateDifficultyLine = (Treks, difficultyName) => {
  const value = getUniqueSectionHead(difficultyLines);
  usedSectionHeads.push(value);

  const sectionArray = Treks.filter(
    (trek) => trek.difficulty === difficultyName
  ).slice(0, 10);

  return {
    filterParameter: "Difficulty",
    filterValue: difficultyName,
    sectionHead: value + difficultyName + " Treks",
    sectionArray: sectionArray,
  };
};

const ComponentGenerator = (Treks) => {
  const trekCategory = TrekCategoryGenerator(Treks);
  const componentValue = [];

  trekCategory.forEach((category) => {
    const [[key, value]] = Object.entries(category);
    componentValue.push(
      key === "state"
        ? GenerateStateLine(Treks, value)
        : key === "season"
          ? GenerateSeasonLine(Treks, value)
          : GenerateDifficultyLine(Treks, value)
    );
  });

  return componentValue;
};

export default ComponentGenerator;
