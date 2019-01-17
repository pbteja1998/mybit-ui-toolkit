import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    > .title-wrapper {\n        display: inline-block;\n        color: #125ac4;\n        font-size: 20px;\n        font-weight: 700;\n        > .calendar {\n            height: 20px;\n            margin-right: 13px;\n            transform: translateY(-2px);\n        };\n    };\n    > .text {\n        font-size: 14px;\n        color: #383838;\n        padding-top: 6px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledWrapper = styled.div(_templateObject());
export default StyledWrapper;