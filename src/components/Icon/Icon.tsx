import React from "react";
import { IconType } from "../types";
import { FaSearch, FaGoogle } from "react-icons/fa";
import "./Icon.css";

export interface IconProps {
  type: IconType;
}

const Icon = ({ type }: IconProps) => {
  switch (type) {
    case "search":
      return <FaSearch className="icon" />;
    case "google":
      return <FaGoogle className="icon" />;
  }
};

export default Icon;
