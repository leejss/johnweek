import React from "react";
import Button, { ButtonProps } from "./Button";
import { ComponentMeta, Story, ComponentStory } from "@storybook/react";

export default {
  title: "Element/Buton",
  component: Button,
  args: {
    fullWidth: false,
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  primary: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline",
  outline: true,
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  danger: true,
};
