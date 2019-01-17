import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  background-color: ", ";\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  margin: 5px;\n  width: 180px;\n  height: 87px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  vertical-align: middle;\n  flex-grow: 1;\n  flex-basis: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledStatCard = styled.div(_templateObject(), function (props) {
  return props.theme.backgroundColor;
});
export default StyledStatCard;