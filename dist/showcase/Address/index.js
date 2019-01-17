import React from 'react';
import { Spin, Icon } from 'antd';
import 'antd/lib/spin/style/css';
import 'antd/lib/icon/style/css';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import AddressWrapper from './styledAddressWrapper';
import AddressLoader from './styledAddressLoader';
import AddressText from './styledAddressText';
var antIcon = React.createElement(Icon, {
  type: "loading",
  spin: true
});

var Address = function Address(_ref) {
  var userName = _ref.userName,
      className = _ref.className;
  return React.createElement("div", {
    className: className
  }, !userName ? React.createElement(AddressLoader, null, React.createElement(Spin, {
    indicator: antIcon
  }), ' ', React.createElement("span", {
    style: {
      marginLeft: 5
    }
  }, "Loading account")) : React.createElement(AddressWrapper, null, React.createElement(Jazzicon, {
    diameter: 39,
    seed: jsNumberForAddress(userName)
  }), React.createElement(AddressText, null, userName)));
};

Address.defaultProps = {
  userName: undefined
};
Address.defaultProps = {
  className: ''
};
export default Address;