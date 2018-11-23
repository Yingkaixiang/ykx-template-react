import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";

import * as app from "@/pages/App/model/";
import * as layout from "@/components/Layout/model";

export default (history: any) => {
  const reducers = combineReducers({
    app: app.reducers,
    layout: layout.reducers,
    router: connectRouter(history),
  });

  const sagaMiddlewares = createSagaMiddleware();

  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(sagaMiddlewares, routerMiddleware(history))),
  );

  sagaMiddlewares.run(app.rootSaga);

  return store;
};
