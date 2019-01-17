import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-top: 10px;\n\n    .ant-tag-checkable{\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n\n      &:hover{\n        color: ", ";\n      }\n    }\n\n    .ant-tag-checkable-checked{\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n\n      &:hover{\n        color: ", ";\n      }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledFilter = styled.div(_templateObject(), function (props) {
  return props.theme.uncheckedBackgroundColor;
}, function (props) {
  return props.theme.uncheckedBorderColor;
}, function (props) {
  return props.theme.uncheckedColor;
}, function (props) {
  return props.theme.hoverColor;
}, function (props) {
  return props.theme.checkedBackgroundColor;
}, function (props) {
  return props.theme.checkedColor;
}, function (props) {
  return props.theme.checkedBorderColor;
}, function (props) {
  return props.theme.checkedColor;
});
export default StyledFilter;