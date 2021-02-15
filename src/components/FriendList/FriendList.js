import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ friends }) =>
  friends.map(friend => (
    <li className={styles.item} key={friend.id}>
      <span className={friend.isOnline ? styles.online : styles.offline}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;
