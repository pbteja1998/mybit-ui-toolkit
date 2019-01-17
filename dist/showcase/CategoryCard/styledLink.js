import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 310px;\n  width: 310px; \n  margin: 0px 10px 20px 15px;\n  padding: 0px;\n  text-decoration: none;\n  > .category-image {\n    width: 310px;\n    height: 310px;\n    margin: 0 auto;\n    background-size: cover;\n    background-position: center;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    background-color: linear-gradient(#24f281, #0083ff) 1;\n    background-image: ", ";\n    border: 6px solid white;\n    > .category-name {\n      width: 98%;\n      margin: 0 auto;\n      text-align: center;\n      font-size: 36px;\n      line-height: 42px;\n      font-family: 'Gilroy';\n      font-weight: bold;\n      color: #ffffff;\n      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n      position: relative;\n      padding: 0px 10px;\n    };\n  };\n  > .category-image:hover {\n      border-style: solid;\n      border-width: 6px;\n      border-image: linear-gradient(#24f281, #0083ff) 1;\n      cursor: pointer;\n  };\n};\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { Link } from 'react-router-dom';
var StyledLink = styled(Link)(_templateObject(), function (props) {
  return "url(".concat(props.image, ")");
});
export default StyledLink;