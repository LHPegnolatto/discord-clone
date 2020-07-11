import React from 'react';
import { FiSun } from 'react-icons/fi';

import ServerButton from '../ServerButton';

import { Container, HomeButton, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <HomeButton>
        <FiSun />
      </HomeButton>

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={7} />
      <ServerButton />
    </Container>
  );
}

export default ServerList;