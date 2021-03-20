import React from "react";
import PropTypes from "prop-types";

const Action = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
Action.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
// console.log(Action);
export default Action;
