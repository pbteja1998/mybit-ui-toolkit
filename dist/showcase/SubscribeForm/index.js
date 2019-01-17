import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import React from 'react';
import { withTheme } from 'styled-components';
import Input from '../Input';
import Button from '../Button';

var SubscribeForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubscribeForm, _React$Component);

  function SubscribeForm(props) {
    var _this;

    _classCallCheck(this, SubscribeForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubscribeForm).call(this, props));
    _this.buttonRef = React.createRef();
    _this.state = {
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      isButtonDisabled: false
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SubscribeForm, [{
    key: "validateEmail",
    value: function validateEmail(email) {
      var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexp.test(email);
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(e) {
      var _this2 = this;

      if (!this.validateEmail(this.state.value)) {
        this.setState({
          value: '',
          placeholder: 'Invalid email. Try again'
        });
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", process.env.MAILCHIMP_API_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        this.setState({
          isButtonDisabled: true
        });
        xhr.send(JSON.stringify({
          email: this.state.value,
          list: this.props.listId
        }));

        var renewState = function renewState(placeholder) {
          _this2.setState({
            value: '',
            placeholder: placeholder,
            isButtonDisabled: false
          });
        };

        xhr.onload = function () {
          renewState('Done');
        };

        xhr.onerror = function (error) {
          renewState('Invalid subscription');
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, React.createElement("span", {
        style: {
          'margin-right': '15px'
        }
      }, React.createElement(Input, {
        type: "email",
        value: this.state.value,
        size: this.props.size,
        placeholder: this.state.placeholder,
        onChange: this.handleInputChange
      })), React.createElement("span", null, React.createElement(Button, {
        type: "solid",
        color: "blue",
        disabled: this.state.isButtonDisabled,
        onClick: this.handleButtonClick
      }, this.state.buttonText)));
    }
  }]);

  return SubscribeForm;
}(React.Component);

SubscribeForm.defaultProps = {
  size: '',
  listId: 'general'
};
export default withTheme(SubscribeForm);