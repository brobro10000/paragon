import * as React from "react";
function SvgPiano(props) {
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
        d="M21 3H3v18h18V3zm-8 11.5h1.25V19h-4.5v-4.5H11V5h2v9.5zM5 5h2v9.5h1.25V19H5V5zm14 14h-3.25v-4.5H17V5h2v14z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPiano;
