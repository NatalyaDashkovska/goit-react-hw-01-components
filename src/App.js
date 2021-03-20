import React from "react";
import Profile from "./components/social-net/social-profile";
import Statistics from "./components/statistic/stats";
import FriendList from "./components/friend-list/freind-list";
import TransactionHistory from "./components/table/action-list";
import users from "./components/social-net/user.json";
import statisticalData from "./components/statistic/statistical-data.json";
import friends from "./components/friend-list/friends.json";
import transactions from "./components/table/transactions.json";
// console.log(transactions);
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
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
