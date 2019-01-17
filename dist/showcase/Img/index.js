import React from 'react';

var Img = function Img(props) {
  return React.createElement("img", {
    className: props.className,
    src: props.src,
    alt: props.alt
  });
};

Img.defaultProps = {
  className: ''
};
export default Img;