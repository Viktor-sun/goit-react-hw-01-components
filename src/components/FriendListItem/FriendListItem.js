import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './FriendListItem.module.css';
import defaultIcon from '../../images/FriendList.svg';

const IconIsOnline = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'brown')};
`;

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    {/*classic variant */}
    {/* <span className={isOnline ? styles.online : styles.offline}></span> */}
    {/*styled-components variant */}
    <IconIsOnline isOnline={isOnline} />
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultIcon,
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
