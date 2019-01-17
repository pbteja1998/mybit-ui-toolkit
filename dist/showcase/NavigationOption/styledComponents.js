import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 1;\n  margin-top: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 25px;\n  margin-top: 18px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: max-content;\n  margin: 0 auto;\n  padding: 0px 4px;\n  color: ", ";\n  border-bottom: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 120px;\n  text-align: center;\n  text-decoration: none;\n  flex: 1 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { Link } from 'react-router-dom';
import styled from 'styled-components';
export var StyledLink = styled(Link)(_templateObject());
export var StyledNavOption = styled.div(_templateObject2(), function (props) {
  return props.selectable ? '#125ac4' : '#d9d9d9';
}, function (props) {
  return props.selected ? '3px solid #125ac4' : 'none';
});
export var StyledImg = styled.img(_templateObject3());
export var StyledP = styled.p(_templateObject4());