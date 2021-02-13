import React from 'react';
import PropTypes from 'prop-types';
import imgProfile from './profile.jpg';
import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="300"
      />
      <p className={styles.name}>{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: imgProfile,
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
