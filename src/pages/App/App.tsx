import React from "react";

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
        <button onClick={incr}>+1</button>
        <button onClick={decr}>-1</button>
        <button onClick={incrAsync}>+1 延迟 1s</button>
        <button onClick={decrAsync}>-1 延迟 1s</button>
      </div>
    </div>
  );
};

export default App;
