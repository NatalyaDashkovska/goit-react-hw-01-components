import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./friend-card";
// console.log(FriendListItem);
const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map((friend) => (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
export default FriendList;
