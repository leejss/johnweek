import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowUp({
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
      <path d="M.213 180.2L180.413 0l180.2 180.2v118.85l-137.07-137.06v269.33h-87.22V162.94L.003 299.26.216 180.2z" />
    </svg>
  );
}

export default SvgArrowUp;
