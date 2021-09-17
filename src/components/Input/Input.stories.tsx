import React from "react";
import Input, { InputProps } from "./Input";
import { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Element/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Search = Template.bind({});
Search.args = {
  icon: "search",
};
export const Google = Template.bind({});
Google.args = {
  icon: "google",
};
