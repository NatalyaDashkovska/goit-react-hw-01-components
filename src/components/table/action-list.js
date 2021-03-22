import React from 'react';
import PropTypes from 'prop-types';
import Action from './action';
import styles from './Table.module.css';
const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <Action
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
export default TransactionHistory;
