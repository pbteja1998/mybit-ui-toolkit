import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  @media (max-width: 359px) {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledFooter = styled.div(_templateObject());
export default StyledFooter;