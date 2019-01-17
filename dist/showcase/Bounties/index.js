import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { withTheme } from 'styled-components';
import Header from './header';
import Card from './card';
import StyledCards from './StyledCards';
import StyledSpinner from './loading/StyledSpinner';
import Spin from '../Spin';
import StyledMessage from './StyledMessage';
import StyledPagination from './StyledPagination';
import Pagination from '../Pagination';
import Theme from '../theme';

var sortBy = function sortBy(items, type) {
  switch (type) {
    case 'Most recent':
      items.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return;

    case 'Highest value':
      items.sort(function (a, b) {
        return b.value - a.value;
      });
      return;

    case 'Lowest value':
      items.sort(function (a, b) {
        return a.value - b.value;
      });
      return;

    default:
      items.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }
};

var Bounties = function Bounties(_ref) {
  var theme = _ref.theme,
      issues = _ref.issues,
      categories = _ref.categories,
      selectedCategory = _ref.selectedCategory,
      setCategory = _ref.setCategory,
      handleClickedFilter = _ref.handleClickedFilter,
      showCompletedTasks = _ref.showCompletedTasks,
      handleShowCompletedTasks = _ref.handleShowCompletedTasks,
      showAmountInCrypto = _ref.showAmountInCrypto,
      handleShowAmountInCrypto = _ref.handleShowAmountInCrypto,
      bountiesPerPage = _ref.bountiesPerPage,
      currentPage = _ref.currentPage,
      setCurrentPage = _ref.setCurrentPage,
      orderBy = _ref.orderBy,
      handleOrderByClicked = _ref.handleOrderByClicked;
  var issuesFiltered;
  var totalIssuesFiltered = 0; // apply filters
  // filter by category and filters

  if (issues && issues[selectedCategory]) {
    issuesFiltered = issues[selectedCategory].issues.slice();
    issuesFiltered = issuesFiltered.filter(function (issue) {
      var flag = false;
      issue.labels.forEach(function (label) {
        flag = issues[selectedCategory].filters[label] ? true : flag;
      });
      flag = true;
      return flag;
    }); // filter by completed tasks or not completed tasks

    issuesFiltered = showCompletedTasks ? issuesFiltered.filter(function (issue) {
      return issue.merged;
    }) : issuesFiltered.filter(function (issue) {
      return !issue.merged;
    });
    sortBy(issuesFiltered, orderBy);
    totalIssuesFiltered = issuesFiltered.length; // slice results for pagination

    var startIndex = currentPage * bountiesPerPage;
    var endIndex = (currentPage + 1) * bountiesPerPage;
    issuesFiltered = issuesFiltered.slice(startIndex, endIndex);
  }

  var toReturn;
  var header = React.createElement(Header, {
    theme: theme,
    categories: categories,
    selectedCategory: selectedCategory,
    setCategory: setCategory,
    issues: issues,
    handleClickedFilter: handleClickedFilter,
    showCompletedTasks: showCompletedTasks,
    showAmountInCrypto: showAmountInCrypto,
    handleShowAmountInCrypto: handleShowAmountInCrypto,
    handleShowCompletedTasks: handleShowCompletedTasks,
    issuesFiltered: issuesFiltered,
    currentPage: currentPage,
    bountiesPerPage: bountiesPerPage,
    totalIssuesFiltered: totalIssuesFiltered,
    orderBy: orderBy,
    handleOrderByClicked: handleOrderByClicked
  });

  if (!issues) {
    toReturn = React.createElement(StyledMessage, null, React.createElement(StyledSpinner, null, React.createElement(Spin, {
      size: "large",
      theme: theme.spin
    })), React.createElement("p", null, "Loading Bounties"));
  } else if (!issuesFiltered || issuesFiltered.length === 0) {
    toReturn = React.createElement("div", null, header, React.createElement(StyledMessage, null, "No bounties found"));
  } else {
    toReturn = React.createElement("div", null, header, React.createElement(StyledCards, null, issuesFiltered.map(function (bounty) {
      return React.createElement(Card, _extends({}, bounty, {
        key: "".concat(bounty.title, " ").concat(bounty.createdAt),
        theme: theme.buttons,
        showAmountInCrypto: showAmountInCrypto
      }));
    })), React.createElement(StyledPagination, null, React.createElement(Pagination, {
      onChange: function onChange(newCurrentPage) {
        return setCurrentPage(newCurrentPage - 1);
      },
      total: totalIssuesFiltered,
      current: currentPage + 1,
      pageSize: bountiesPerPage,
      defaultCurrent: 1,
      theme: theme.pagination
    })));
  }

  return toReturn;
};

Bounties.defaultProps = {
  theme: Theme,
  issues: undefined
};
export default withTheme(Bounties);