import React from 'react';
import StyledStats from './styledStats';
import StatCard from '../StatCard';

var getStat = function getStat(stat) {
  return React.createElement(StatCard, {
    key: stat.name,
    stat: stat
  });
};

var Stats = function Stats(props) {
  return React.createElement(StyledStats, null, props.stats.map(getStat));
};

export default Stats;