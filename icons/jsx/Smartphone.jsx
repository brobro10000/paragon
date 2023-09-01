import * as React from "react";
function SvgSmartphone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M5 1v22h14V1H5zm12 18H7V5h10v14z" fill="currentColor" />
    </svg>
  );
}
export default SvgSmartphone;
