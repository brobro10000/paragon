function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgShoppingBag = function SvgShoppingBag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 6h-4c0-2.21-1.79-4-4-4S8 3.79 8 6H4v16h16V6zm-10 5H8V8h2v3zm2-7c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 7h-2V8h2v3z",
    fill: "currentColor"
  }));
};
export default SvgShoppingBag;