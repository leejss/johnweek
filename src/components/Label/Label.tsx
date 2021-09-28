import React from "react";
import "./Label.css";

export interface LabelProp {
  children?: string;
}

const Label = ({ children }: LabelProp) => {
  return (
    <div className="Label">
      <label className="Text">{children}</label>
    </div>
  );
};

export default Label;
