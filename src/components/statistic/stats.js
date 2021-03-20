import React from "react";
import Data from "./data";
import PropTypes from "prop-types";
// console.log(Data);
const Statistics = ({ stats, title }) => (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}
    <ul class="stat-list">
      {stats.map((st) => (
        <li key={st.id}>
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
  title: "",
};
// console.dir(Statistics);
export default Statistics;
