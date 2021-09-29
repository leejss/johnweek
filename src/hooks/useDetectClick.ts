import React from "react";

export function useDetectClick(ref: React.RefObject<HTMLDivElement> | null) {
  console.log("useDetectClick called");
  // 클릭했어 안했어?
  const [outsideClick, setOutsideClick] = React.useState(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Node)) {
      // 만약 클릭 이벤트가 발생한 Element가 ref.current의 바깥에 위치한다면,
      // outside 클릭이 발생한거야
      setOutsideClick(true);
    } else {
      setOutsideClick(false);
    }
  };
  React.useEffect(() => {
    // document에 클릭 이벤트 핸들러를 붙인다.
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return outsideClick;
}
