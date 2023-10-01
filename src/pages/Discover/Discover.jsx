import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import BoxTitle from "../../components/BoxTitle/BoxTitle";

import ChatsIcon from "../../assets/icons/chats.svg";

const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "Explain everything as you're a career counselor and helping to find a career path.",
};

function Discover() {
  const [messages, setMessages] = useState([
    {
      message:
        "Witamy na pokładzie! Jestem tutaj, aby pomóc Ci w Twojej edukacyjnej podróży. Napisz coś o sobie 🎓",
      sentTime: "just now",
      sender: "KarierAI",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "KarierAI") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "KarierAI",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div>
      <BoxTitle title="Chat" iconSrc={ChatsIcon} />
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? <TypingIndicator content="KarierAI pisze..." /> : null
            }
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput placeholder="Twoja wiadomość" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default Discover;
