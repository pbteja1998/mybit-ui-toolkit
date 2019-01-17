import React from 'react';
import logo from './logo.svg';

var Logo = function Logo(_ref) {
  var className = _ref.className;
  return React.createElement("img", {
    alt: "MyBit Logo",
    className: className,
    src: logo
  });
};

export default Logo;