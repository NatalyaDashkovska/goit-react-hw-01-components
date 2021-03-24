import React from 'react';
import Statistic from './Statistic';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const StatisticsList = ({ stats, title }) => {
  
  return (<section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.stat_list}>
      {stats.map(({id, label, percentage}) => (
        <Statistic label={label} percentage={percentage} key={id} />
      ))}
    </ul>
  </section>);
  
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

StatisticsList.defaultProps = {
  title: '',
};

export default StatisticsList;
