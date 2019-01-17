import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ant-btn{\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n    font-size: 14px;\n    line-height: 1.5;\n    &:focus,\n    &:hover{\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &--is-active,\n    &:active{\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n  .ant-btn-clicked:after{\n    border: 0 solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import 'antd/lib/button/style/css';
var MyBitButtonStyle = styled.div(_templateObject(), function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.backgroundColor;
}, function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.backgroundColorHover;
}, function (props) {
  return props.theme.borderColorHover;
}, function (props) {
  return props.theme.colorHover;
}, function (props) {
  return props.theme.colorActive;
}, function (props) {
  return props.theme.backgroundColorActive;
}, function (props) {
  return props.theme.borderColorActive;
}, function (props) {
  return props.theme.color;
});
export default MyBitButtonStyle;