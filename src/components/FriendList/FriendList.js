import React from 'react';
import styled from 'styled-components';
import styles from './FriendList.module.css';

const IconIsOnline = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'brown')};
`;

const FriendListItem = ({ friends }) =>
  friends.map(friend => (
    <li className={styles.item} key={friend.id}>
      {/*classic variant */}
      {/* <span className={friend.isOnline ? styles.online : styles.offline}></span> */}
      {/*styled-components variant */}
      <IconIsOnline isOnline={friend.isOnline} />
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
