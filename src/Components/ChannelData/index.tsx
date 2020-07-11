import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    console.log(messagesRef)

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Hoje é o meu aniversário!"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />
        <ChannelMessage
          author="Luiz Pegnolatto"
          date="18/10/2020"
          content="Lorem"
        />

        <ChannelMessage
          author="Chatbot"
          date="18/10/2020"
          content={
            <>
              <Mention>@Luiz Pegnolatto</Mention>, aí é foda
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;