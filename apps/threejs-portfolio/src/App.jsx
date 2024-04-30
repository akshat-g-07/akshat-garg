import AllSections from "./sections/AllSections";
import "./App.css";
import { Skills } from "@repo/portfolio-details";

function App() {
  Skills.map((skill) => {
    console.log(skill.name);
  });
  return <AllSections />;
}

export default App;
