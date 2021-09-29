import React from "react";
import Select from "./Select";
import type { SelectProps } from "./Select";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";

export default {
  title: "Element/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
];

export const Default: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = React.useState("");
  return <Select options={options} value={value} onSelect={setValue} />;
};
