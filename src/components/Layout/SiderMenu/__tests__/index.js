import React from "react";
import renderer from "react-test-renderer";

import SiderMenu from "../SiderMenu";

test("should rendered success", () => {
  const treeData = [
    {
      id: "1",
      name: "测试",
    },
  ];
  const matches = [
    {
      id: "1",
    },
  ];
  const tree = renderer
    .create(<SiderMenu treeData={treeData} matches={matches} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
