import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 6px;\n  height: 6px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledCircleIndicator = styled.div(_templateObject(), function (props) {
  return props.circleColor;
});
export default StyledCircleIndicator;