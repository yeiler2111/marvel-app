import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./index.module.css";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
