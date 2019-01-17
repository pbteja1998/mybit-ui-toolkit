import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import AssetWrapper from './styledAssetWrapper';
import locationIcon from './Location-icon.svg';

var AssetCard = function AssetCard(_ref) {
  var funded = _ref.funded,
      goal = _ref.goal,
      city = _ref.city,
      country = _ref.country,
      name = _ref.name,
      category = _ref.category,
      id = _ref.id,
      backgroundImage = _ref.backgroundImage,
      fundingStage = _ref.fundingStage,
      pastDate = _ref.pastDate;
  var assetFunded = fundingStage === '3' || fundingStage === '4';
  var barWidth = assetFunded ? 100 : Math.ceil(funded / goal * 100);
  var goalFormatted = Number(goal).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return React.createElement(AssetWrapper, {
    image: backgroundImage
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "image-holder"
  }, React.createElement("div", {
    className: "image-holder-gradient"
  }), React.createElement("img", {
    alt: "Location icon",
    className: "image-holder-location-icon",
    src: locationIcon
  }), React.createElement("b", {
    className: "image-holder-name"
  }, name), React.createElement("p", {
    className: "image-holder-location"
  }, city, ", ", React.createElement("span", null, country))), React.createElement("div", {
    className: "details"
  }, React.createElement("p", {
    className: "details-funded"
  }, "Funded: ", React.createElement("b", null, assetFunded ? goalFormatted : "$".concat(Math.round(funded)))), React.createElement("p", {
    className: "details-goal"
  }, "Goal:", ' ', React.createElement("b", null, goalFormatted)), pastDate ? React.createElement(ProgressBar, {
    percent: barWidth,
    status: "exception",
    showInfo: false
  }) : React.createElement(ProgressBar, {
    percent: barWidth,
    status: assetFunded ? 'success' : 'active',
    showInfo: false
  }), React.createElement("div", {
    className: "center-button"
  }, React.createElement(Link, {
    to: "/explore/".concat(category, "/").concat(id),
    href: "/explore/".concat(category, "/").concat(id)
  }, React.createElement("button", {
    onClick: function onClick() {},
    className: "details-contribute",
    disabled: false
  }, assetFunded || pastDate ? 'View Asset' : 'Contribute'))))));
};

AssetCard.defaultProps = {
  city: '',
  country: '',
  name: '' // clickHandler: () => {},

};
export default AssetCard;