import React from "react";
import Card from "./Card";
import type { CardProps } from "./Card";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";

export default {
  title: "Element/Card",
  component: Card,
  subcomponents: { Title: Card.Title, Section: Card.Section },
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <Card.Title borderBottom>Card Title</Card.Title>
    <Card.Section>Card Section</Card.Section>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  borderd: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};
