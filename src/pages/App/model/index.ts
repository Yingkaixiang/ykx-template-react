import { delay } from "redux-saga";
import { takeEvery, put, all } from "redux-saga/effects";

const INCR = "app/incr";
const DECR = "app/decr";
const INCR_ASYNC = "app/incrAsync";
const DECR_ASYNC = "app/decrAsync";

export interface IActionCreator {
  type: string;
}

export interface IState {
  count: number;
}

const state: IState = {
  count: 0,
};

interface IAction {
  type: string;
}

export function reducers(prevState: IState = state, action: IAction) {
  switch (action.type) {
    case INCR:
      return { ...prevState, count: prevState.count + 1 };
    case DECR:
      return { ...prevState, count: prevState.count - 1 };
    default:
      return prevState;
  }
}

export function* incrAsync() {
  yield delay(1000);
  yield put({ type: INCR });
}

export function* watchIncrAsync() {
  yield takeEvery(INCR_ASYNC, incrAsync);
}

export function* decrAsync() {
  yield delay(1000);
  yield put({ type: DECR });
}

export function* watchDecrAsync() {
  yield takeEvery(DECR_ASYNC, decrAsync);
}

export function* rootSaga() {
  yield all([watchIncrAsync(), watchDecrAsync()]);
}
