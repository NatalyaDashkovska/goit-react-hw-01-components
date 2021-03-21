import React from 'react';
import Data from './data';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';
import makeRandomColor from './func.js';
const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.stat_list}>
      {stats.map(st => (
        <li
          key={st.id}
          style={{ backgroundColor: makeRandomColor() }}
          className={styles.item}
        >
          <Data label={st.label} percentage={st.percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
