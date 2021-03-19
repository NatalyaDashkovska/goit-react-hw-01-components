import React from "react";
import FriendListItem from "./friend-card";
// console.log(FriendListItem);
const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map((friend) => (
      <FriendListItem
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
