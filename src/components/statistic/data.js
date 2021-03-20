import React from "react";
import PropTypes from "prop-types";

const Data = ({ label, percentage }) => {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </>
  );
};

Data.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
// console.log(Data);
export default Data;
