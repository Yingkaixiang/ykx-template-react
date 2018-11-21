import React from "react";
import CSSModule from "react-css-modules";

import styles from "./App.less";

interface IAppProps {
  count?: number;
  incr?: () => void;
  decr?: () => void;
  incrAsync?: () => void;
  decrAsync?: () => void;
}

const App: React.FunctionComponent<IAppProps> = ({
  count,
  incr,
  decr,
  incrAsync,
  decrAsync,
}) => {
  return (
    <div>
      <h1>redux demo</h1>
      <div>
        <span>{count}</span>
        <button styleName="btn" onClick={incr}>
          +1
        </button>
        <button styleName="btn" onClick={decr}>
          -1
        </button>
        <button styleName="btn" onClick={incrAsync}>
          +1 延迟 1s
        </button>
        <button styleName="btn" onClick={decrAsync}>
          -1 延迟 1s
        </button>
      </div>
    </div>
  );
};

export default CSSModule(styles)(App);
