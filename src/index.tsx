import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
} from "connected-react-router";

import registerServiceWorker from "./registerServiceWorker";

// import App from "@/pages/App/";
import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";

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

const LoadableApp = Loadable({
  loader: () => import("@/pages/App/"),
  loading: () => <Loading />,
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={LoadableApp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
