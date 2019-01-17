import React from 'react';
import StyledLink from './styledLink';

var CategoryCard = function CategoryCard(_ref) {
  var image = _ref.image,
      path = _ref.path,
      name = _ref.name;
  return React.createElement(StyledLink, {
    image: image,
    to: path,
    href: path,
    key: path,
    className: "category-link"
  }, React.createElement("div", {
    className: "category-image"
  }, React.createElement("p", {
    className: "category-name"
  }, name)));
};

CategoryCard.defaultProps = {};
export default CategoryCard;