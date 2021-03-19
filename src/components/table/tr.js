import React from "react";
import PropTypes from "prop-types";

const Trans = ({ type, amount, currency, id }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
Trans.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
// console.log(Trans);
export default Trans;
