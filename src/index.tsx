import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import registerServiceWorker from "./registerServiceWorker";
import Router from "./router";
import store from "./store";

import "./index.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store(history)}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
