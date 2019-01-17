import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  li{\n    color: #4a4a4a;\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: 70px;\n\n    @media (max-width: 500px) {\n      margin: 0px 0px;\n    }\n  }\n\n  .categories-mobile{\n    display:none;\n\n    @media (max-width: 500px) {\n      display: block;\n    }\n  }\n\n  .categories-desktop{\n    @media (max-width: 500px) {\n      display: none;\n    }\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledCategories = styled.div(_templateObject());
export default StyledCategories;