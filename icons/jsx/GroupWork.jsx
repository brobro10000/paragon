import * as React from "react";
function SvgGroupWork(props) {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5zM9.5 8a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm6.5 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgGroupWork;
