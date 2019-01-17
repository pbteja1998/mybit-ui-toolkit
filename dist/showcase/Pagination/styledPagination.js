import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ant-pagination-item a  {\n    color: ", "\n  }\n\n  .ant-pagination-item,\n  .ant-pagination-item a, \n  .ant-pagination-prev a, \n  .ant-pagination-next a {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n  }\n  .ant-pagination-item-active {\n    border-color: ", "\n  }\n\n  .ant-pagination-item:hover,\n  .ant-pagination-prev:hover a,\n  .ant-pagination-next:hover a {\n    border-color: ", "\n  }\n\n  .ant-pagination-disabled a {\n    border-color: ", ";\n    color: ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledPagination = styled.div(_templateObject(), function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.backgroundColor;
}, function (props) {
  return props.theme.itemActiveBorderColor;
}, function (props) {
  return props.theme.itemHoverBorderColor;
}, function (props) {
  return props.theme.disabledItemBorderColor;
}, function (props) {
  return props.theme.disabledItemColor;
});
export default StyledPagination;