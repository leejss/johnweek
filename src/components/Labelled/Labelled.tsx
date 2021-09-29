import clsx from "clsx";
import React from "react";
import { Label } from "../Label";
import "./Labelled.css";

export interface LabelledProps {
  label?: string;
  error?: Error;
  children?: React.ReactNode;
  fit?: boolean;
}

const Labelled = ({ label, children, error, fit }: LabelledProps) => {
  const errorMarkup = error && error.message && (
    <div>
      <span>{error.message}</span>
    </div>
  );

  const labelMarkup = (
    <div className="LabelWrapper">
      <Label>{label}</Label>
    </div>
  );

  const classNames = clsx("Labelled", fit && "fit");

  return (
    <div className={classNames}>
      {labelMarkup}
      {children}
      {errorMarkup}
    </div>
  );
};

export default Labelled;
