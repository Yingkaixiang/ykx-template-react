import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import registerServiceWorker from "./registerServiceWorker";

import App from "@/pages/App/";

import * as app from "@/pages/App/model/";

const reducers = combineReducers({
  app: app.reducers,
});

const sagaMiddlewares = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddlewares));

sagaMiddlewares.run(app.rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
