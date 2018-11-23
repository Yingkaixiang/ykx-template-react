interface IState {
  collapsed: boolean;
}

const state: IState = {
  collapsed: false,
};

export interface IAction {
  type: string;
  payload?: any;
}

export const LAYOUT_TOGGLE = "layout/toggle";

export function reducers(prevState: IState = state, action: IAction) {
  switch (action.type) {
    case LAYOUT_TOGGLE:
      return { ...prevState, collapsed: !prevState.collapsed };
    default:
      return prevState;
  }
}
