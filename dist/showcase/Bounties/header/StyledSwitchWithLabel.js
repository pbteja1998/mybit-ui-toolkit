import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  @media (max-width: 900px) {\n    margin-top: 10px;\n    margin-left: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledSwitchWithLabel = styled.div(_templateObject(), function (props) {
  return props.styling && props.styling.marginLeft;
});
export default StyledSwitchWithLabel;