import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  .ant-switch{\n    background-color: ", ";\n  }\n  .ant-switch-checked{\n    background-color: ", ";\n  }\n  .ant-btn-clicked:after{\n    border: 0 solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledSwitch = styled.div(_templateObject(), function (props) {
  return props.theme.uncheckedBackgroundColor;
}, function (props) {
  return props.theme.checkedBackgroundColor;
}, function (props) {
  return props.theme.checkedBackgroundColor;
});
export default StyledSwitch;