import * as React from "react";
import * as CSSModules from "react-css-modules";

import styles from "./Hello.less";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement,
}: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div styleName="hello">
      <div>Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default CSSModules(Hello, styles);

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
