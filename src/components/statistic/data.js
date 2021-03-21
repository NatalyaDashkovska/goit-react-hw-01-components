import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Data = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

Data.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
// console.log(Data);
export default Data;
