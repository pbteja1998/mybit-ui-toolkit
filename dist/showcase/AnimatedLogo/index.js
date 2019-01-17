import React from 'react';
import StyledAnimatedLogo from './styledAnimatedLogo';

var AnimatedLogo = function AnimatedLogo(props) {
  return React.createElement(StyledAnimatedLogo, props, React.createElement("svg", {
    width: "512",
    height: "512",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "1.414"
  }, React.createElement("path", {
    d: "M510.35 256L415 351.42h-.17C374 310.76 318 285.5 256 285.5c-62 0-118.09 25.26-158.93 65.92h-.17L1.65 256 256 1.65 510.35 256z",
    fill: props.primaryColor,
    fillOpacity: "0",
    stroke: props.primaryColor,
    strokeWidth: "5",
    transform: "matrix(.78361 0 0 .80235 55.395 50.594)",
    className: "JVlbXHZN_0"
  }), React.createElement("path", {
    d: "M386.86 379.54L256.09 510.31 125.15 379.54A183.26 183.26 0 0 1 256 325.29c8.748-.014 17.486.588 26.15 1.8a183.036 183.036 0 0 1 104.71 52.45z",
    fill: props.secondaryColor,
    fillOpacity: "0",
    stroke: props.secondaryColor,
    strokeWidth: "5",
    transform: "matrix(.78361 0 0 .80235 55.395 50.594)",
    className: "JVlbXHZN_1"
  })));
};

AnimatedLogo.defaultProps = {
  size: '100px',
  primaryColor: "#001358",
  secondaryColor: "rgb(24, 144, 255)",
  animationSpeed: "2200ms",
  animationIterationCount: "infinite"
};
export default AnimatedLogo;