import Treks from "@/assets/Treks.json";

export default function GetTrekByID(trekID) {
  console.log("GetTrekById", trekID);

  return Treks.find((trek) => trek.id === trekID);
}
