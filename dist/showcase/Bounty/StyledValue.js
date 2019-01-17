import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: rgba(125, 125, 125, 0.2);\n    color: #7d7d7d;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: bold;\n  color: #1890ff;\n  padding: 5px 20px;\n  background-color: rgba(24, 144, 255, 0.1);\n  border-radius: 4px;\n  margin-left: 10px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
var StyledValue = styled.span(_templateObject(), function (props) {
  return props.merged && css(_templateObject2());
});
export default StyledValue;