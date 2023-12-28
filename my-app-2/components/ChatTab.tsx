import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Chat } from "../models/chat";
import Chats from "../pages/Chat";
import Question from "../pages/Question";

const chats: Chat[][] = [
  [],
  [
    {
      id: 1,
      question: "What is your name?",
      answer: "My name is Chatbot",
    },
    {
      id: 2,
      question: "How are you?",
      answer: "I am fine",
    },
    {
      id: 3,
      question: "Where are you from?",
      answer: "I am from India",
    },
  ],
  [
    {
      id: 1,
      question: "What is your name?",
      answer: "My name is Chatbot",
    },
    {
      id: 2,
      question: "How are you?",
      answer: "I am fine",
    },
    {
      id: 3,
      question: "Where are you from?",
      answer: "I am from India",
    },
    {
      id: 4,
      question: "What is your name?",
      answer: "My name is Chatbot",
    },
    {
      id: 5,
      question: "How are you?",
      answer: "I am fine",
    },
    {
      id: 6,
      question: "Where are you from?",
      answer: "I am from India",
    },
  ],
];

const Drawer = createDrawerNavigator();

export default function ChatTab() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Question" component={Question} />
        {chats &&
          chats.length > 0 &&
          chats.map((chat, index) => (
            <Drawer.Screen
              name={`${index + 1}: ${
                chat[0]?.question ? chat[0].question : "No questions found"
              }`}
              component={Chats}
              key={index}
              initialParams={{
                chat: chat,
              }}
            />
          ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
