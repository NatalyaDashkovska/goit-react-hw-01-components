import React from "react";
import Trans from "./tr";
const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <Trans
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          id={item.id}
        />
      ))}
    </tbody>
  </table>
);
export default TransactionHistory;
