import React from "react";
import PropTypes from "prop-types";

const Data = ({ id, label, percentage }) => {
  return (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};

Data.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
// console.log(Data);
export default Data;
