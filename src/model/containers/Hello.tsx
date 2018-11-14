import Hello from "../../Hello";
import * as actions from "../actions/";
import { IStoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapStateToProps({
  enthusiasmLevel,
  languageName,
}: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>,
) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
