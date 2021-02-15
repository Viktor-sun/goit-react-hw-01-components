import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

const App = () => (
  <Container>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
  </Container>
);

export default App;
