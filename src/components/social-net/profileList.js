import React from "react";
import Profile from "./social-profile";
console.log(Profile);
const Insert = ({ user }) => (
  <ul>
    {user.map((us) => (
      <Profile
        avatar={us.avatar}
        name={us.name}
        tag={us.tag}
        location={us.location}
        stats={us.stats}
      />
    ))}
  </ul>
);
console.dir(Insert);
export default Insert;
