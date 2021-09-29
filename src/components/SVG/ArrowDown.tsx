import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowDown({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360.61 431.32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M360.4 251.12l-180.2 180.2L0 251.12V132.27l137.07 137.06V0h87.22v268.38l136.32-136.32-.21 119.06z" />
    </svg>
  );
}

export default SvgArrowDown;
