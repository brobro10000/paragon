function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSnowboarding(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.4 17.09a.748.748 0 00-.64.17c-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89A6.507 6.507 0 0020 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35L8.5 11.7l1 4.3L6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67a.744.744 0 00-.51-.42c-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89zM8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64-6.17-1.31z"
  }));
}

export default SvgSnowboarding;