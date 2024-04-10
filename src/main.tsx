// import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import RootLayout from "./component/rootLayout/layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter >
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);
