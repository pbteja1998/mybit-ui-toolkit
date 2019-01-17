import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ant-menu{\n    background-color: ", ";\n    border: none;\n    color: ", ";\n  }\n\n  .ant-menu-item:hover{\n    color: ", ";\n  }\n\n  .ant-menu-item-selected{\n    color: ", ";\n    border-bottom: ", ";\n  }\n\n  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{\n    border-bottom: none;\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledMenu = styled.div(_templateObject(), function (props) {
  return props.styling.backgroundColor;
}, function (props) {
  return props.styling.color;
}, function (props) {
  return props.styling.itemHoverColor;
}, function (props) {
  return props.styling.itemSelectedColor;
}, function (props) {
  return props.styling.borderBottom;
}, function (props) {
  return props.styling.backgroundColorItem;
});
export default StyledMenu;