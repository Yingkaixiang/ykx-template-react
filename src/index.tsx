import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";

import registerServiceWorker from "./registerServiceWorker";
import router from "./router";
import store from "./store";
import history from "./history";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(router)}</ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
