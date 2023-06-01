function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgSportsBaseball(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28zm16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 12c0-3.28 1.97-6.09 4.79-7.33C17.01 3.02 14.63 2 12 2S6.99 3.02 5.21 4.67C8.03 5.91 10 8.72 10 12s-1.97 6.09-4.79 7.33C6.99 20.98 9.37 22 12 22s5.01-1.02 6.79-2.67A8.002 8.002 0 0114 12z",
    fill: "currentColor"
  }));
}
export default SvgSportsBaseball;