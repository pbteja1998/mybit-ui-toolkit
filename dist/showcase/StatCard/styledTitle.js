import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n  margin: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledTitle = styled.p(_templateObject(), function (props) {
  return props.theme.color;
});
export default StyledTitle;