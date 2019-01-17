import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0px 20px;\n    border-right: ", ";\n    text-align: center;\n    > .title {\n        font-size: 14px;\n        font-weight: 500;\n        color: #383838;\n        line-height: 1.5;\n        margin: 0;\n        padding: 0;\n    };\n    > .content {\n        font-size: 18px;\n        color: ", ";\n        font-weight: 700;\n        margin: 0;\n        padding: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledBox = styled.div(_templateObject(), function (props) {
  return props.border ? '1px solid black' : 'none';
}, function (props) {
  return props.black ? 'black' : 'rgb(45, 184, 75)';
});
export default StyledBox;