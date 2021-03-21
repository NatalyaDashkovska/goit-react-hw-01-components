import React from 'react';
import Profile from './components/SocialNet/social-profile';
import Statistics from './components/Statistic/stats';
import FriendList from './components/FriendList/freind-list';
import TransactionHistory from './components/Table/action-list';
import users from './components/SocialNet/user.json';
import statisticalData from './components/Statistic/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Table/transactions.json';
// console.log(transactions);
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
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
