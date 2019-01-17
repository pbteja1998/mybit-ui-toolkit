import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &&& {\n        float: left;\n        top: 27px;\n        position: relative;\n        font-size: 24px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    line-height: 90px;\n    font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { Spin, Icon } from 'antd';
import 'antd/lib/spin/style/css';
import 'antd/lib/icon/style/css';
var antIcon = React.createElement(Icon, {
  type: "loading",
  spin: true
});
var ExchangeRateSpan = styled.span(_templateObject());
var StyledLoader = styled(Spin)(_templateObject2());

var ExchangeRate = function ExchangeRate(_ref) {
  var mybitPrice = _ref.mybitPrice,
      USD_MYB_SYMBOL = _ref.USD_MYB_SYMBOL;
  return React.createElement("div", null, !mybitPrice && React.createElement(StyledLoader, {
    indicator: antIcon
  }), React.createElement(ExchangeRateSpan, null, mybitPrice && "$".concat(mybitPrice), ' ', React.createElement("b", null, USD_MYB_SYMBOL)));
};

ExchangeRate.defaultProps = {
  mybitPrice: undefined,
  USD_MYB_SYMBOL: 'USD/MYB'
};
export default ExchangeRate;