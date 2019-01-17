import React from 'react';
import Logo from '../Logo/';
import ExchangeRate from '../ExchangeRate';
import AccountInfo from '../AccountInfo';
import { HeaderWrapper, LogoColumn, ExchangeRateColumn, AccountColumn } from './styledComponents';

var MyBitGoHeader = function MyBitGoHeader(_ref) {
  var user = _ref.user,
      prices = _ref.prices;
  return React.createElement(HeaderWrapper, {
    className: "grid"
  }, React.createElement(LogoColumn, null, React.createElement(Logo, {
    className: "AppHeader__logo"
  })), React.createElement(ExchangeRateColumn, null, React.createElement(ExchangeRate, prices)), React.createElement(AccountColumn, null, React.createElement(AccountInfo, user)));
};

export default MyBitGoHeader;