import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IActionCreator, IState } from "./model/";

import Async from "./Async";

function mapStateToProps(state: any): IState {
  return state.app;
}

function mapDispatchToProps(dispatch: Dispatch<IActionCreator>) {
  return {
    decr: () => dispatch({ type: "app/decr" }),
    decrAsync: () => dispatch({ type: "app/decrAsync" }),
    incr: () => dispatch({ type: "app/incr" }),
    incrAsync: () => dispatch({ type: "app/incrAsync" }),
    reqTest: () => dispatch({ type: "app/reqTest" }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Async);
