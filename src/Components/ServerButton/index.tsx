import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  hasNotifications,
  mentions
}) => {
  return (
      <Button
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
      />
  );
}

export default ServerButton;