import React from "react";
import Profile from "./components/social-net/social-profile";
import users from "./components/social-net/user.json";
console.log(users);
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
    </div>
  );
};

export default App;
