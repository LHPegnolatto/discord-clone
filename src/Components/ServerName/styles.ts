import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;
  background-color: var(--secondary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export const ExpandIcon = styled(FiChevronDown)`
  width: 24px;
  height: 24px;
  margin-right: 0;

  color: var(--white);
  cursor: pointer;

  transition: width .15s, height .15s, margin-right .15s;

  &:hover {
    width: 28px;
    height: 28px;

    margin-right: -2px;
  }
`;
