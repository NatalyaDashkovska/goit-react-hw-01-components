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
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
// console.log(Data);
export default Data;
