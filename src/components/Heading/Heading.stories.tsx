import React from "react";
import Heading from "./Heading";
import type { HeadingProps } from "./Heading";
import { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Element/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  element: "h2",
  children: "Default",
};
