import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: #7d7d7d;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: normal;\n  color: #4a4a4a;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
var StyledValueLabel = styled.span(_templateObject(), function (props) {
  return props.merged && css(_templateObject2());
});
export default StyledValueLabel;