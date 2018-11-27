import { delay } from "redux-saga";
import { takeEvery, put, all, call } from "redux-saga/effects";

import { requestTest } from "@/common/api";

const INCR = "app/incr";
const DECR = "app/decr";
const INCR_ASYNC = "app/incrAsync";
const DECR_ASYNC = "app/decrAsync";
const REQ_TEST = "app/reqTest";
const REQ_TEST_SUCCESS = "app/reqTestSuccess";

export interface IActionCreator {
  type: string;
}

export interface IState {
  count: number;
  name: string;
  matches: any[];
}

const state: IState = {
  count: 0,
  name: "未登录",
  matches: [],
};

interface IAction {
  type: string;
  payload?: any;
}

export function reducers(prevState: IState = state, action: IAction) {
  switch (action.type) {
    case INCR:
      return { ...prevState, count: prevState.count + 1 };
    case DECR:
      return { ...prevState, count: prevState.count - 1 };
    case REQ_TEST_SUCCESS:
      return { ...prevState, name: action.payload };
    case "app/matches":
      return { ...prevState, matches: action.payload };
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

export function* reqTest() {
  yield put({ type: REQ_TEST_SUCCESS, payload: "加载中..." });
  const { data } = yield call(requestTest);
  if (data) {
    yield put({ type: REQ_TEST_SUCCESS, payload: data.name });
  } else {
    yield put({ type: REQ_TEST_SUCCESS, payload: "获取失败" });
  }
}

export function* watchReqTest() {
  yield takeEvery(REQ_TEST, reqTest);
}

export function* rootSaga() {
  yield all([watchIncrAsync(), watchDecrAsync(), watchReqTest()]);
}
