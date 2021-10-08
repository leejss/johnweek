import React from "react";
import Card from "./Card";
import type { CardProps } from "./Card";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import "./Card.scss";

export default {
  title: "Element/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "This is title",
  section: "this is section",
};

export const Compound: ComponentStory<typeof Card> = (args) => {
  return (
    <Card>
      <Card.Header>Heading</Card.Header>
      <Card.Section>Section</Card.Section>
    </Card>
  );
};
