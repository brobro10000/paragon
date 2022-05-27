import * as React from "react";

function SvgMoving(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.71 9.71L22 12V6h-6l2.29 2.29-4.17 4.17a.996.996 0 01-1.41 0l-1.17-1.17a3 3 0 00-4.24 0L2 16.59 3.41 18l5.29-5.29a.996.996 0 011.41 0l1.17 1.17a3 3 0 004.24 0l4.19-4.17z" />
    </svg>
  );
}

export default SvgMoving;
