import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var Wrapper = styled.li(_templateObject());
export default Wrapper;