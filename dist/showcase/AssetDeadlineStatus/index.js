import React from 'react';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/icon/style/css';
import { getStringFromDate, getRemainingTime } from './date_utils';
import StyledWrapper from './styledWrapper';
var CalendarIcon = React.createElement(IconAnt, {
  type: "calendar",
  style: {
    color: '#7f7f7f',
    marginRight: '0.25em'
  },
  width: "20px",
  height: "20px"
});

var AssetDeadlineStatus = function AssetDeadlineStatus(_ref) {
  var status = _ref.status,
      deadline = _ref.deadline;

  switch (status) {
    case 'expired':
      return React.createElement(StyledWrapper, null, React.createElement("div", {
        className: "title-wrapper"
      }, CalendarIcon, "Funding period has ended"), React.createElement("div", {
        className: "text"
      }, "Funding period has ended on ", getStringFromDate(deadline)));

    case 'active':
      return React.createElement(StyledWrapper, null, React.createElement("div", {
        className: "title-wrapper"
      }, CalendarIcon, getRemainingTime(deadline)), React.createElement("div", {
        className: "text"
      }, "Funding period ends on ", getStringFromDate(deadline)));

    case 'funded':
      return React.createElement(StyledWrapper, null, React.createElement("div", {
        className: "title-wrapper"
      }, CalendarIcon, "Funding goal has been reached"));

    default:
      return React.createElement("div", null);
  }
};

AssetDeadlineStatus.defaultProps = {};
export default AssetDeadlineStatus;