import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

import Ref from "./globalComps/ref.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Ref>
    <App />
  </Ref>
);
