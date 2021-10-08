import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import CardHeader from "./components/CardHeader";
import CardSection from "./components/CardSection";

describe("<Card />", () => {
  test("기본 카드 컴포넌트가 DOM에 렌더링 된다.", () => {
    render(<Card title="This is title" section="This is section" />);
    screen.debug();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
  test("Compound 형태로 렌더", () => {
    render(
      <Card>
        <CardHeader>Hello</CardHeader>
        <CardSection>Section</CardSection>
      </Card>
    );
    screen.debug();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
