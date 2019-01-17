import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/icon/style/css';
import styled from 'styled-components';
var StyledIconRight = styled(IconAnt)(_templateObject());

var Icon = function Icon(_ref) {
  var isRight = _ref.isRight,
      type = _ref.type;
  return isRight ? React.createElement(StyledIconRight, {
    type: type
  }) : React.createElement(IconAnt, {
    type: type
  });
};

Icon.defaultProps = {
  isRight: false
};
export default Icon;