import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/home/App";
import AppRouter from "./appRouter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);

reportWebVitals();
