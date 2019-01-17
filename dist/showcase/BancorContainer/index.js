import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import React, { Component } from 'react';

var _React$createContext = React.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

export { Provider, Consumer };

var Bancor =
/*#__PURE__*/
function (_Component) {
  _inherits(Bancor, _Component);

  function Bancor(props) {
    var _this;

    _classCallCheck(this, Bancor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bancor).call(this, props));
    _this.initBancor = _this.initBancor.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.defaultOptions = {
      type: 1,
      baseCurrencyId: '5b164627ae2482321708eb93',
      pairCurrencyId: '5937d635231e97001f744267',
      primaryColor: '#1890ff',
      displayCurrency: 'ETH',
      operation: 'buy'
    };
    _this.state = {
      initBancor: _this.initBancor
    };
    return _this;
  }

  _createClass(Bancor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!document.getElementById('bancor-script')) {
        var scriptFile = document.createElement('script');
        scriptFile.setAttribute('src', 'https://widget-convert.bancor.network/v1');
        scriptFile.setAttribute('id', 'bancor-script');
        document.body.appendChild(scriptFile);
        window.scriptFile = scriptFile;
      }
    }
  }, {
    key: "initBancor",
    value: function initBancor(opt) {
      var options = _objectSpread({}, this.defaultOptions, opt);

      if (document.getElementById('bancor-wc')) {
        var elem = document.getElementById('bancor-wc');
        elem.parentNode.removeChild(elem);
      }

      var scriptDiv = document.createElement('div');
      scriptDiv.setAttribute('style', 'display: none;');
      scriptDiv.setAttribute('id', 'bancor-wc');
      document.body.appendChild(scriptDiv);

      if (window.BancorConvertWidget) {
        var type = options.type,
            baseCurrencyId = options.baseCurrencyId,
            pairCurrencyId = options.pairCurrencyId,
            primaryColor = options.primaryColor,
            displayCurrency = options.displayCurrency,
            operation = options.operation;
        window.BancorConvertWidget.init({
          type: type,
          baseCurrencyId: baseCurrencyId,
          pairCurrencyId: pairCurrencyId,
          primaryColor: primaryColor,
          displayCurrency: displayCurrency
        });
        window.BancorConvertWidget.showConvertPopup(operation);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return Bancor;
}(Component);

export default Bancor;