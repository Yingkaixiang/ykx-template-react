import React from "react";
import { shallow } from "enzyme";
import Mock from "mockjs";

import Breadcrumb from "../index";

const createRoutes = (total?: number) => {
  if (total && total > 0) {
    const { data } = Mock.mock({
      [`data|${total}`]: [
        {
          id: "@id()",
          url: "@url()",
          title: "@word(5)",
        },
      ],
    });

    return data instanceof Array ? data : [data];
  }
  return [];
};

it("The component should have none child", () => {
  const app = shallow(<Breadcrumb routes={createRoutes()} />);
  expect(app.children().length).toEqual(0);
});

it("The component should have one child", () => {
  const total = 1;
  const app = shallow(<Breadcrumb routes={createRoutes(total)} />);
  expect(app.children().length).toEqual(total);
});

it("The component should have three chidren", () => {
  const total = 3;
  const app = shallow(<Breadcrumb routes={createRoutes(total)} />);
  expect(app.children().length).toEqual(3);
});
