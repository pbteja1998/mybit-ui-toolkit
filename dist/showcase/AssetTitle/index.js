import React from 'react';
import LocationIcon from './location.png';
import { StyledWrapper, StyledAssetName, StyledLocationWrapper, StyledImg } from './styledComponents';

var AssetTitle = function AssetTitle(_ref) {
  var assetName = _ref.assetName,
      city = _ref.city,
      country = _ref.country,
      className = _ref.className;
  return React.createElement(StyledWrapper, {
    className: className
  }, React.createElement(StyledAssetName, null, assetName), React.createElement(StyledLocationWrapper, null, React.createElement(StyledImg, {
    src: LocationIcon
  }), city, ", ", country));
};

AssetTitle.defaultProps = {
  className: ''
};
export default AssetTitle;