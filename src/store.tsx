import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import history from "./history";

import * as app from "@/pages/App/model/";

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

export default store;
