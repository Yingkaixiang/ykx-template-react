import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IActionCreator, IState } from "./model/";

import App from "./App";

function mapStateToProps(state: any): IState {
  return state.app;
}

function mapDispatchToProps(dispatch: Dispatch<IActionCreator>) {
  return {
    decr: () => dispatch({ type: "app/decr" }),
    decrAsync: () => dispatch({ type: "app/decrAsync" }),
    incr: () => dispatch({ type: "app/incr" }),
    incrAsync: () => dispatch({ type: "app/incrAsync" }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
