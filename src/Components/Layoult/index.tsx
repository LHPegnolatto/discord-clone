import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserList from '../UserList';
import ChannelData from '../ChannelData';
import UserInfo from '../UserInfo';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserList />
      <ChannelData />
      <UserInfo />
    </Grid>
  );
};

export default Layout;