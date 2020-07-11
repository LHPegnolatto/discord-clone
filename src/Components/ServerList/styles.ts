import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  margin-bottom: 8px;

  background-color: transparent;

  position: relative;
  cursor: pointer;

  color: var(--symbol);
  font-size: 20px;

  transition: color .2s, font-size .2s;

  &:hover {
    color: var(--discord);
    font-size: 22px;
  }
`;

export const Separator = styled.span`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`;