import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 100%;\n  margin-left: 9px;\n  top: 4px;\n\n  img{\n    width: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledImage = styled.div(_templateObject());
export default StyledImage;