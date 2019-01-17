import React from 'react';
import { Divider } from 'antd';
import 'antd/lib/divider/style/css';
import StyledCard from './StyledCard';
import StyledCardTime from './StyledCardTime';
import StyledLabel from './StyledLabel';
import StyledLabels from './StyledLabels';
import StyledCardTitle from './StyledCardTitle';
import StyledRepoName from './StyledRepoName';
import StyledValue from './StyledValue';
import StyledValueLabel from './StyledValueLabel';
import StyledButtonChallenge from './StyledButtonChallenge';
import StyledHeader from './StyledHeader';
import StyledFooter from './StyledFooter';
import Button from '../Button';
import getTimeAgo from './timeago';
import Icon from '../Icon';
import StyledCheckmark from './StyledCheckmark';
import StyledNotYetFunded from './StyledNotYetFunded';
var OrgName = 'MyBitFoundation';

var getValueLabel = function getValueLabel(value, mybitInUsd, tokenSymbol, showAmountInCrypto, merged) {
  return value > 0 ? React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, React.createElement(StyledValueLabel, {
    merged: merged
  }, "Value"), React.createElement(StyledValue, {
    merged: merged
  }, showAmountInCrypto ? "".concat(Number(value.toFixed(2)).toLocaleString(), " ").concat(tokenSymbol) : "$".concat(Number(mybitInUsd).toLocaleString()))) : React.createElement(StyledNotYetFunded, null, React.createElement("p", null, "Not yet funded"));
};

var generateLabels = function generateLabels(labels) {
  return React.createElement(StyledLabels, null, labels.map(function (label) {
    return React.createElement(StyledLabel, {
      key: label
    }, React.createElement(Divider, {
      type: "vertical"
    }), ' ', label);
  }));
};

var getTimeLabel = function getTimeLabel(time) {
  return React.createElement(StyledCardTime, null, getTimeAgo(time));
};

var Card = function Card(_ref) {
  var title = _ref.title,
      labels = _ref.labels,
      repoName = _ref.repoName,
      repoUrl = _ref.repoUrl,
      value = _ref.value,
      mybitInUsd = _ref.mybitInUsd,
      createdAt = _ref.createdAt,
      url = _ref.url,
      merged = _ref.merged,
      tokenSymbol = _ref.tokenSymbol,
      showAmountInCrypto = _ref.showAmountInCrypto;
  return React.createElement(StyledCard, null, React.createElement(StyledHeader, null, React.createElement("div", null, merged && React.createElement(StyledCheckmark, null, React.createElement(Icon, {
    type: "check"
  })), React.createElement(StyledCardTitle, {
    merged: merged
  }, title), generateLabels(labels)), React.createElement("div", null, getTimeLabel(createdAt))), React.createElement(StyledRepoName, {
    href: repoUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    merged: merged
  }, "".concat(OrgName, "/").concat(repoName)), React.createElement(StyledFooter, null, getValueLabel(value, mybitInUsd, tokenSymbol, showAmountInCrypto, merged), !merged && React.createElement(StyledButtonChallenge, null, React.createElement(Button, {
    type: "solid",
    size: "large",
    href: url
  }, "Accept Challenge"))));
};

export default Card;