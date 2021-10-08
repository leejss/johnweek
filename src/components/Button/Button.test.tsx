import { render, screen } from "@testing-library/react";
import Button from "./Button";
import React from "react";
import { AiFillAlert } from "react-icons/ai";

describe("<Button />", () => {
  test("디폴트 버튼이 DOM에 렌더링된다.", () => {
    render(<Button>Button</Button>);
    // screen.debug();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("primary");
  });

  test("아이콘 버튼이 DOM에 렌더링된다.", () => {
    render(<Button startIcon={<AiFillAlert />}>Button</Button>);
    screen.debug();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
