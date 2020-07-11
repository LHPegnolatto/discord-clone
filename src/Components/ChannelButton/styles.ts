import styled, { css } from 'styled-components';
import { FiHash, FiUserPlus, FiSettings } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  > div + div {
    opacity: 0;
    
    transition: opacity .2s;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  } 

  &.active {
    > div + div {
      opacity: 1;
    }
  }
`;

export const HashtagIcon = styled(FiHash)`
  font-size: 20px;

  color: var(--symbol);
`;

const iconsStyles = css`
  font-size: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const InviteIcon = styled(FiUserPlus)`
  ${iconsStyles}
`;

export const SettingsIcon = styled(FiSettings)`
  ${iconsStyles}

  margin-left: 4px;
`;
