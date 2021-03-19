import React from "react";
import Data from "./data";
console.log(Data);
const Statistics = ({ stats, title }) => (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}
    <ul class="stat-list">
      {stats.map((st) => (
        <Data id={st.id} label={st.label} percentage={st.percentage} />
      ))}
    </ul>
  </section>
);
console.dir(Statistics);
export default Statistics;
