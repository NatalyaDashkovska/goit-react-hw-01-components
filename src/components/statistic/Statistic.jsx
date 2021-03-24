import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';
import makeRandomColor from '../../functions/makeRandomColor';

const Statistic = ({ label, percentage }) => {
  
  return (
    <li
      
      style={{ backgroundColor: makeRandomColor() }}
      className={styles.item}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
 
};
// console.log(Data);
export default Statistic;
