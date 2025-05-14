import { useLocation } from "react-router";

export default function ExploreAll() {
  const location = useLocation();
  console.log(location.state);
  return <div>Explore All</div>;
}
