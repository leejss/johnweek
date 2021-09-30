import React from "react";
import Button from "./Button";
import type { ButtonProps } from "./Button";
import { ComponentMeta, Story } from "@storybook/react";
import { FiCrosshair } from "react-icons/fi";

export default {
  title: "Element/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  loading: false,
  children: "Button",
  varaint: "contained",
};
