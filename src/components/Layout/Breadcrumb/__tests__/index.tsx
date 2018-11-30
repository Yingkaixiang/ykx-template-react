import React from "react";
import renderer from "react-test-renderer";

import Breadcrumb from "../index";

test("render successfully with separator '>'", () => {
  const tree = renderer
    .create(
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">About</a>
        </Breadcrumb.Item>
      </Breadcrumb>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("render successfully with separator '/'", () => {
  const tree = renderer
    .create(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Support</a>
        </Breadcrumb.Item>
      </Breadcrumb>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("render null", () => {
  const tree = renderer.create(<Breadcrumb />).toJSON();
  expect(tree).toMatchSnapshot();
});
