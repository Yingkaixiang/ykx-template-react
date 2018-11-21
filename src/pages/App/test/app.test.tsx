import React from "react";
import { shallow } from "enzyme";

import App from "../App";

it("成功渲染 4 个按钮", () => {
  const app = shallow(<App />);
  expect(app.find(".btn").length).toEqual(4);
});

it("组件显示值为 1", () => {
  const count = 1;
  const app = shallow(<App count={count} />);
  expect(Number(app.find("span").text())).toEqual(count);
});
