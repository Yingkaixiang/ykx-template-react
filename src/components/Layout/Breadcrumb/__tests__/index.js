import React from "react";
import renderer from "react-test-renderer";

import Breadcrumb from "../index";

test("should rendered success", () => {
  const routes = [
    {
      id: 1,
      name: "测试",
    },
  ];
  const tree = renderer.create(<Breadcrumb routes={routes} />).toJSON();
  expect(tree).toMatchSnapshot();
});
