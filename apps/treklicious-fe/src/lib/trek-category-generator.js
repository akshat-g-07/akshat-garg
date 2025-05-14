const TrekCategoryGenerator = (Treks) => {
  const stateList = [...new Set(Treks.map((trek) => trek.state))];
  const stateListSliced = stateList.sort(() => Math.random() - 0.5).slice(0, 4);

  const seasonList = [...new Set(Treks.map((trek) => trek.season))];
  const seasonListSliced = seasonList
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const difficultyList = [...new Set(Treks.map((trek) => trek.difficulty))];
  const difficultyListSliced = difficultyList
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const trekCategory = [];

  for (let i = 0; i < stateListSliced.length; i++) {
    trekCategory.push({ state: stateListSliced[i] });
  }

  for (let i = 0; i < seasonListSliced.length; i++) {
    trekCategory.push({ season: seasonListSliced[i] });
  }

  for (let i = 0; i < difficultyListSliced.length; i++) {
    trekCategory.push({ difficulty: difficultyListSliced[i] });
  }

  const sliceNum = Math.floor(Math.random() * 5) + 4;
  const trekCategorySliced = trekCategory
    .sort(() => Math.random() - 0.5)
    .slice(0, sliceNum);

  return trekCategorySliced;
};

export default TrekCategoryGenerator;
