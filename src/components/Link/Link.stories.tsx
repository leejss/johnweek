import React from "react";
import Link from "./Link";
import type { LinkProps } from "./Link";
import { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Element/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: Story<LinkProps> = (args) => <Link {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Default Link",
  url: "https://www.google.co.kr/",
};
