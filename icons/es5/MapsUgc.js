function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgMapsUgc(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-1.18 0-2.34-.26-3.43-.78-.27-.13-.56-.19-.86-.19-.19 0-.38.03-.56.08l-3.2.94.94-3.2c.14-.47.1-.98-.11-1.42A7.925 7.925 0 014 12c0-4.41 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"
  }));
}

export default SvgMapsUgc;