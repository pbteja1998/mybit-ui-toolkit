import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ant-dropdown-trigger{\n    color: ", ";\n    &:hover{\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledDropdown = styled.div(_templateObject(), function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.colorHover;
});
export default StyledDropdown;