import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Component } from 'react';
import styled from 'styled-components';
import 'antd/lib/button/style/css';
import Button from '../Button';
import Theme from '../theme';
var BancorWidgetSpan = styled.span(_templateObject());

var BancorWidgetButton =
/*#__PURE__*/
function (_Component) {
  _inherits(BancorWidgetButton, _Component);

  function BancorWidgetButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BancorWidgetButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BancorWidgetButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.initBancor = function () {
      if (window.BancorConvertWidget) {
        var _this$props = _this.props,
            type = _this$props.type,
            baseCurrencyId = _this$props.baseCurrencyId,
            pairCurrencyId = _this$props.pairCurrencyId,
            primaryColor = _this$props.primaryColor,
            displayCurrency = _this$props.displayCurrency;
        window.BancorConvertWidget.init({
          type: type,
          baseCurrencyId: baseCurrencyId,
          pairCurrencyId: pairCurrencyId,
          primaryColor: primaryColor,
          displayCurrency: displayCurrency
        });
      }
    };

    return _this;
  }

  _createClass(BancorWidgetButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!document.getElementById('bancor-wc')) {
        var scriptDiv = document.createElement('div');
        scriptDiv.setAttribute('style', 'display: none;');
        scriptDiv.setAttribute('id', 'bancor-wc');
        document.body.appendChild(scriptDiv);
        var scriptFile = document.createElement('script');
        scriptFile.setAttribute('src', 'https://widget-convert.bancor.network/v1');
        var loaded = false;

        var loadCallback = function loadCallback() {
          if (!loaded) {
            loaded = true;

            _this2.initBancor();
          }
        };

        scriptFile.onreadystatechange = loadCallback;
        scriptFile.onload = loadCallback;
        document.body.appendChild(scriptFile);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement(Button, {
        styling: Theme.buttons.primary.blue,
        size: "default",
        onClick: function onClick() {
          if (window.BancorConvertWidget) {
            window.BancorConvertWidget.showConvertPopup(_this3.props.operation);
          }
        }
      }, React.createElement(BancorWidgetSpan, null, this.props.children)));
    }
  }]);

  return BancorWidgetButton;
}(Component);

BancorWidgetButton.defaultProps = {
  children: 'Buy MYB here',
  type: 1,
  baseCurrencyId: '5b164627ae2482321708eb93',
  pairCurrencyId: '5937d635231e97001f744267',
  primaryColor: '#1890ff',
  displayCurrency: 'ETH',
  operation: 'buy'
};
export default BancorWidgetButton;