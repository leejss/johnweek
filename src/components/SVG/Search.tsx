import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSearch({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        style={{
          // blockProgression: "tb",
          textIndent: 0,
          textTransform: "none",
        }}
        d="M103.09 0C76.668 0 50.241 10.027 30.155 30.113c-40.172 40.171-40.218 105.74-.046 145.91 35.217 35.216 89.911 39.558 129.94 13.03l60.918 60.916a20.461 20.461 0 0029.008 0 20.46 20.46 0 000-29.008l-60.872-60.916c26.497-40.023 22.127-94.732-13.077-129.94C155.94 10.02 129.512-.008 103.091-.008zm-.046 27.166c19.371.009 38.738 7.428 53.596 22.285 29.716 29.715 29.762 77.521.046 107.24-29.716 29.715-77.523 29.715-107.24 0-29.716-29.715-29.716-77.52 0-107.24 14.858-14.858 34.225-22.295 53.596-22.285zM48.388 126.39a2.947 2.947 0 00-2.532 4.236c10.265 21.49 32.226 36.328 57.602 36.328a63.86 63.86 0 0015.932-2.026 2.947 2.947 0 00-.093-5.71c-25.496-5.694-48.907-16.881-68.975-32.23a2.947 2.947 0 00-1.933-.599z"
        color="#000"
      />
    </svg>
  );
}

export default SvgSearch;
