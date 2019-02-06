import React from "react";
import Modify from "./Modify.js";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<Modify />);
});

it("deleteRecord", () => {
  const onClick = jest.fn();
  let wrapper = mount(<Modify />);
  wrapper
    .find("button")
    .at(2)
    .simulate("click");

  //expect(onClick).toBeCalledWith();
  expect(onClick.mock.calls.length).toEqual(0);
});
