import React from 'react';
// import Web3 from 'web3';
import { Spin, Icon } from 'antd';
import 'antd/lib/spin/style/css';
import 'antd/lib/icon/style/css';
import Address from '../Address';
import { StyledAccountInfo, Balance, BalanceHeader, BalanceInfo } from './styledComponents';
var antIcon = React.createElement(Icon, {
  type: "loading",
  spin: true
}); // const IS_DAPP_VERSION_ONE = true;

var AccountInfo = function AccountInfo(_ref) {
  var myBitBalance = _ref.myBitBalance,
      ethBalance = _ref.ethBalance,
      userName = _ref.userName;
  return React.createElement(StyledAccountInfo, null, React.createElement(Balance, null, React.createElement(BalanceHeader, null, "Balance"), !ethBalance || !myBitBalance ? React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement(Spin, {
    indicator: antIcon
  })) : React.createElement(BalanceInfo, null, React.createElement("div", null, Number(myBitBalance).toFixed(5), ' ', React.createElement("b", null, "MYB")), React.createElement("div", null, Number(ethBalance).toFixed(5), ' ', React.createElement("b", null, "ETH")))), React.createElement(Address, {
    userName: userName
  }));
};

AccountInfo.defaultProps = {
  myBitBalance: '0',
  ethBalance: '',
  userName: ''
};
export default AccountInfo;