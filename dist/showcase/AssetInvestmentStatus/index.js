import React from 'react';
import StyledBox from './styledBox';
import StyledWrapper from './styledWrapper';

var AssetInvestmentStatus = function AssetInvestmentStatus(_ref) {
  var className = _ref.className,
      raised = _ref.raised,
      goal = _ref.goal,
      investors = _ref.investors;
  return React.createElement(StyledWrapper, {
    className: className
  }, React.createElement(StyledBox, {
    border: true,
    className: "no-padding-left"
  }, React.createElement("p", {
    className: "title"
  }, "Funds raised"), React.createElement("p", {
    className: "content"
  }, raised)), React.createElement(StyledBox, {
    border: true,
    black: true
  }, React.createElement("p", {
    className: "title"
  }, "Funding goal"), React.createElement("p", {
    className: "content"
  }, goal)), React.createElement(StyledBox, {
    border: false,
    black: true
  }, React.createElement("p", {
    className: "title"
  }, "Number of investors so far"), React.createElement("p", {
    className: "content"
  }, investors)));
};

AssetInvestmentStatus.defaultProps = {
  investors: 0,
  className: ''
};
export default AssetInvestmentStatus;