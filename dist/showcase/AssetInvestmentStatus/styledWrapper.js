import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    align-content: flex-start;\n    > .no-padding-left { \n        padding-left: 0px;\n        text-align: left;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledWrapper = styled.div(_templateObject());
export default StyledWrapper;