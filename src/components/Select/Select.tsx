import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Labelled } from "../Labelled";
import "./Select.css";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  onChange?(selected: string): void;
  value?: string;
  label?: string;
}

const Select = ({ options, value, onChange, label }: SelectProps) => {
  const handleChange = onChange
    ? (event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.currentTarget.value)
    : undefined;

  const selectedOption = getSelectedOption(options, value);

  // Markup
  const optionsMarkup =
    options.length !== 0 ? options.map(renderSingleOption) : null;

  const contentMarkup = (
    <div className="Content">
      {/* Inline label */}
      {/* Prefix */}
      <span className="SelectedOption">{selectedOption?.label}</span>
      <FaArrowDown />
    </div>
  );

  return (
    <Labelled label={label}>
      <div className="SelectWrapper">
        <select className="Select" value={value} onChange={handleChange}>
          {optionsMarkup}
        </select>
        {contentMarkup}
        <div className="Backdrop" />
      </div>
    </Labelled>
  );
};

export default Select;

// functions
function renderSingleOption(op: Option): React.ReactNode {
  // render option
  const { label, value } = op;
  return (
    <option key={value} value={value} className="Option">
      {label}
    </option>
  );
}

function getSelectedOption(options: Option[], value?: string) {
  return options.find((op) => op.value === value);
}
