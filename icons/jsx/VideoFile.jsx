import * as React from "react";

function SvgVideoFile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14 2H4v20h16V8l-6-6zm-1 7V3.5L18.5 9H13zm1 5l2-1.06v4.12L14 16v2H8v-6h6v2z" />
    </svg>
  );
}

export default SvgVideoFile;
