import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: #7d7d7d;\n    cursor: initial;\n\n    &:focus,\n    &:hover{\n      color: #7d7d7d;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: normal;\n  color: #1890ff;\n  margin-top: 8px;\n  cursor: pointer;\n  display: block;\n  width: max-content;\n\n  :hover{\n    color: #40a9ff;\n    text-decoration: none;\n  }\n\n  :focus{\n    text-decoration: none;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
var StyledRepoName = styled.a(_templateObject(), function (props) {
  return props.merged && css(_templateObject2());
});
export default StyledRepoName;