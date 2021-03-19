import React from "react";
import Profile from "./components/social-net/social-profile";
import Statistics from "./components/statistic/stats";
import users from "./components/social-net/user.json";
import statisticalData from "./components/statistic/statistical-data.json";
// console.log(stats);
const App = () => {
  return (
    <div>
      <h1>Разментка</h1>
      <Profile
        name={users.name}
        tag={users.tag}
        avatar={users.avatar}
        location={users.location}
        stats={users.stats}
      />
      {/* <Insert stat={stats} /> */}
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </div>
  );
};

export default App;
