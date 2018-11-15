import * as React from "react";
import * as ReactDOM from "react-dom";
// import Hello from "./Hello";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { enthusiasm } from "./models/reducers/index";
import { IStoreState } from "./models/types/index";
import Hello from "./models/containers/Hello";
import { Provider } from "react-redux";

const store = createStore<IStoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript",
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
