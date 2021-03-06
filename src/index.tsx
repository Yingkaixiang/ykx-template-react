import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import { LocaleProvider } from "antd";

import registerServiceWorker from "./registerServiceWorker";
import router from "./router";
import store from "./store";
import history from "./history";

import zh_CN from "antd/lib/locale-provider/zh_CN";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zh_CN}>{renderRoutes(router)}</LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
