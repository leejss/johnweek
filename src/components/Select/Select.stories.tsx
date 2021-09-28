import React from "react";
import Select from "./Select";
import type { SelectProps } from "./Select";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
];

export default {
  title: "Element/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = React.useState(options[0].value);
  const handleSelectChange = React.useCallback((v) => {
    console.log("Change");
    setSelected(v);
  }, []);

  return (
    <Select
      options={options}
      value={selected}
      onChange={handleSelectChange}
      label="SDADASDSAD"
    />
  );
};
