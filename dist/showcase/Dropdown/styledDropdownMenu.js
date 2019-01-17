import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.ant-menu-item-selected,\n.ant-menu-item:hover,\n.ant-menu-submenu-title:hover{\n    color: ", ";\n    background-color: ", ";\n    span {\n        color: inherit;\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledDropdownMenu = styled.div(_templateObject(), function (props) {
  return props.theme.submenuColorHover;
}, function (props) {
  return props.theme.submenuBackgroundColorHover;
});
export default StyledDropdownMenu;