import clsx from "clsx";
import React, { useState, useRef, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useDetectClick } from "../../hooks/useDetectClick";
import "./Select.css";

interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  placeholder?: string;
  icon?: React.ReactNode;
  value?: React.ReactNode;
  onSelect?(e: string): void;
  options?: Option[];
}

const Select = ({
  icon = <BiDownArrow />,
  onSelect,
  placeholder = "선택하세요",
  value,
  options,
}: SelectProps) => {
  // display 컨트롤
  const [show, setShow] = useState(false);
  // CSS 컨트롤: onFocus
  const [focus, setFocus] = useState(false);
  // Ref
  const selectRef = useRef<HTMLDivElement>(null);
  const outsideClicked = useDetectClick(selectRef);

  // 이벤트 핸들러
  // - 옵션 클릭시
  const handleSelect = (
    e: React.MouseEvent<HTMLDivElement> & { target: Element }
  ) => {
    // 메뉴 아이템 클릭 시,
    // 1. placeholder를 비운다.
    placeholder = "";
    // 2. onSelect함수를 호출한다.
    if (onSelect) {
      const selected = e.target.textContent ? e.target.textContent : "";
      onSelect(selected);
    }
    // 3. show 를 끈다.
    setShow(false);
  };

  // - Select 컨트롤 클릭시
  const handleClick = () => {
    setShow((p) => !p);
  };

  // useEffect
  useEffect(() => {
    // 메뉴가 보이면 focus가 true
    setFocus(show);
  }, [show]);

  useEffect(() => {
    if (outsideClicked) {
      setShow(false);
    }
  }, [outsideClicked]);
  console.log("outsideClicked", outsideClicked);
  console.log("show", show);

  // Class
  const menuClasses = clsx("Menu", show && "show");
  const controlClasses = clsx("Control", focus && "focus");

  // Markup
  const menuMarkup =
    options && options.length !== 0 ? (
      <div className={menuClasses} onClick={handleSelect}>
        {options.map((m) => {
          return (
            <div className="Menu-item" key={m.value}>
              {m.label}
            </div>
          );
        })}
      </div>
    ) : null;

  const labelMarkup = (
    <div className="Select-label">
      {placeholder && !value ? placeholder : value ? value : placeholder}
    </div>
  );

  const iconMarkup = icon ? <div className="Select-icon">{icon}</div> : null;

  return (
    <div className="Select-container" ref={selectRef}>
      <div className={controlClasses} onClick={handleClick}>
        {labelMarkup}
        {iconMarkup}
      </div>
      {menuMarkup}
    </div>
  );
};

export default Select;
