import * as React from "react";
function SvgNightlife(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M1 5h14l-6 9v4h2v2H5v-2h2v-4L1 5zm9.1 4l1.4-2H4.49l1.4 2h4.21zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3a3 3 0 011 .17V5z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgNightlife;
