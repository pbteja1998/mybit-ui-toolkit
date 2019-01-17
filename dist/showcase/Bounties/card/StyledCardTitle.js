import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: #7d7d7d;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 500;\n  color: #4a4a4a;\n  margin-right: 5px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
var StyledCardTitle = styled.span(_templateObject(), function (props) {
  return props.merged && css(_templateObject2());
});
export default StyledCardTitle;