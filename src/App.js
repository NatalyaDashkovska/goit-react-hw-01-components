import React from 'react';
import Profile from './components/Profile/Profile';
import StatisticsList from './components/Statistic/StatisticList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';

import users from './components/Profile/user.json';
import statisticalData from './components/Statistic/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Transactions/transactions.json';
const App = () => {
  return (
    <div>
      <Profile
        name={users.name}
        tag={users.tag}
        avatar={users.avatar}
        location={users.location}
        stats={users.stats}
      />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <StatisticsList stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
