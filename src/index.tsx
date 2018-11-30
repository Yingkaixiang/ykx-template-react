import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
} from "connected-react-router";
import { renderRoutes } from "react-router-config";

import registerServiceWorker from "./registerServiceWorker";
import router from "./router";

import * as app from "@/pages/App/model/";

const history = createBrowserHistory();

const reducers = combineReducers({
  app: app.reducers,
  router: connectRouter(history),
});

const sagaMiddlewares = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(sagaMiddlewares, routerMiddleware(history))),
);

sagaMiddlewares.run(app.rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(router)}</ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
