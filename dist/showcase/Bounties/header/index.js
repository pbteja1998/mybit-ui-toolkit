import React, { Fragment } from 'react';
import StyledTitle from './StyledTitle';
import StyledSubHeader from './StyledSubHeader';
import StyledCategories from './StyledCategories';
import StyledFilters from './StyledFilters';
import StyledListHeader from './StyledListHeader';
import StyledItemsCounter from './StyledItemsCounter';
import StyledListHeaderLeft from './StyledListHeaderLeft';
import Menu from '../../Menu';
import SwitchWithLabel from './SwitchWithLabel';
import Filter from '../../Filter';
import Dropdown from '../../Dropdown';

var Header = function Header(_ref) {
  var styling = _ref.styling,
      categories = _ref.categories,
      selectedCategory = _ref.selectedCategory,
      setCategory = _ref.setCategory,
      issues = _ref.issues,
      handleClickedFilter = _ref.handleClickedFilter,
      showCompletedTasks = _ref.showCompletedTasks,
      handleShowCompletedTasks = _ref.handleShowCompletedTasks,
      handleShowAmountInCrypto = _ref.handleShowAmountInCrypto,
      showAmountInCrypto = _ref.showAmountInCrypto,
      issuesFiltered = _ref.issuesFiltered,
      bountiesPerPage = _ref.bountiesPerPage,
      currentPage = _ref.currentPage,
      totalIssuesFiltered = _ref.totalIssuesFiltered,
      orderBy = _ref.orderBy,
      handleOrderByClicked = _ref.handleOrderByClicked;
  var max = 0;
  var min = 0;

  if (issuesFiltered) {
    if (bountiesPerPage > totalIssuesFiltered) {
      min = totalIssuesFiltered > 0 ? currentPage * bountiesPerPage + 1 : 0;
      max = totalIssuesFiltered;
    } else {
      min = currentPage * bountiesPerPage + 1;
      max = totalIssuesFiltered >= (currentPage + 1) * bountiesPerPage ? (currentPage + 1) * bountiesPerPage : currentPage * (bountiesPerPage + 1) + issuesFiltered.length - 1;
    }
  }

  return React.createElement("div", null, React.createElement(StyledTitle, null, "Bounties"), React.createElement(StyledSubHeader, null, "Choose your expertise"), React.createElement(StyledCategories, null, React.createElement(Menu, {
    onClick: function onClick(item) {
      return setCategory(item.key);
    },
    selectedKeys: [selectedCategory],
    mode: "horizontal",
    items: categories,
    className: "categories-desktop",
    styling: styling.menu
  }), React.createElement(Menu, {
    onClick: function onClick(item) {
      return setCategory(item.key);
    },
    selectedKeys: [selectedCategory],
    mode: "vertical",
    items: categories,
    className: "categories-mobile",
    styling: styling.menu
  })), React.createElement(StyledFilters, null, issues[selectedCategory] && Object.entries(issues[selectedCategory].filters).map(function (filter) {
    return React.createElement(Filter, {
      styling: styling.filters,
      checked: filter[1],
      key: filter[0],
      onChange: function onChange(checked) {
        handleClickedFilter(filter[0], checked);
      }
    }, filter[0]);
  })), React.createElement(StyledListHeader, null, React.createElement("div", null, React.createElement(StyledListHeaderLeft, null, React.createElement(StyledItemsCounter, null, issuesFiltered ? "Showing ".concat(min, "-").concat(max, " of ").concat(totalIssuesFiltered) : 'Showing 0 of 0'), React.createElement(Fragment, null, React.createElement(SwitchWithLabel, {
    size: "small",
    checked: showCompletedTasks,
    styling: styling.switch,
    handleClick: handleShowCompletedTasks,
    label: "Show completed tasks",
    key: "rma2"
  }), React.createElement(SwitchWithLabel, {
    size: "small",
    checked: showAmountInCrypto,
    styling: styling.switch,
    handleClick: handleShowAmountInCrypto,
    label: "Display amount in crypto",
    key: "put2",
    stylingSwitch: {
      marginLeft: '20px'
    }
  })))), React.createElement("div", null, React.createElement(Dropdown, {
    placement: "bottomCenter",
    selected: orderBy,
    handleClick: function handleClick(order) {
      return handleOrderByClicked(order);
    },
    menu: ['Most recent', 'Highest value', 'Lowest value'],
    styling: styling.dropdown,
    trigger: "click"
  }))));
};

Header.defaultProps = {
  categories: [{
    name: 'Development',
    filters: ['Front-End', 'Smart Contracts', 'APIs', 'Debugging', 'Other']
  }, {
    name: 'Design',
    filters: ['Sketch', 'Photoshop']
  }, {
    name: 'Marketing',
    filters: ['Market this', 'Market that']
  }]
};
export default Header;