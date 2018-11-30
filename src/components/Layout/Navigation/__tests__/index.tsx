import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Navigation from "../index";

const routes = [
  {
    name: "首页",
    path: "/",
  },
];

test("render successfully", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigation routes={routes} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
