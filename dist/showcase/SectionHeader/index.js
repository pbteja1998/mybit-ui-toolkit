import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        font-family: Roboto;\n        line-height: 2.0;\n        margin: 15px 0px 0px 0px;\n        ", "\n        font-weight: 800;\n        font-style: normal;\n        position: relative;\n        text-align: ", ";\n        letter-spacing: 1px;\n        color: ", ";\n        &::after {\n            display: block;\n            position: relative;\n            content: '';\n            width: ", "px;\n            height: ", "px;\n            background-color:  ", ";\n            -webkit-transform: translate(-50%, 0%) rotate(45deg);\n            transform: translate(-50%, 0%) rotate(45deg);\n            ", "\n            ", "\n            ", "\n            margin-bottom: 10px;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
/*
${props => props.position === "left" ? `left: 1%;` : ''}
*/

var SectionHeader = function SectionHeader(_ref) {
  var size = _ref.size,
      textColor = _ref.textColor,
      dividerColor = _ref.dividerColor,
      children = _ref.children,
      squareSize = _ref.squareSize,
      position = _ref.position;
  var Heading = Number.isInteger(size) ? "h".concat(size) : "div";
  var StyledHeading = styled(Heading)(_templateObject(), function (props) {
    return Number.isInteger(props.size) ? "" : "font-size: ".concat(props.size, ";");
  }, function (props) {
    return props.position;
  }, function (props) {
    return props.textColor;
  }, function (props) {
    return props.squareSize;
  }, function (props) {
    return props.squareSize;
  }, function (props) {
    return props.dividerColor;
  }, function (props) {
    return props.position === "right" ? "left: 99%;" : '';
  }, function (props) {
    return props.position === "center" ? "left: 50%;" : '';
  }, function (props) {
    return props.position === "left" ? "margin-left: ".concat(props.squareSize / 2 + 2, "px;") : '';
  });
  return React.createElement(StyledHeading, {
    size: size,
    textColor: textColor,
    dividerColor: dividerColor,
    squareSize: squareSize,
    position: position,
    calculatedMargin: squareSize / 2
  }, children);
};

SectionHeader.defaultProps = {
  size: 1,
  dividerColor: "#fb3448",
  textColor: "#383838",
  squareSize: 10,
  position: "center"
};
export default SectionHeader;