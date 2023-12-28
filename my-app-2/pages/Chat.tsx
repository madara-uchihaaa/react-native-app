import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Chat } from "../models/chat";

export default function Chats({ route }) {
  const { chat } = route.params;
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    setNewQuestion("");
    // Add logic to update the chat array with the new question
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        {chat && chat.length > 0 ? (
          <FlatList
            style={{ flex: 1, backgroundColor: "#fff" ,borderRadius: 10}}
            data={chat}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.item}>
                <View style={styles.view}>
                  <AntDesign name="user" size={24} color="black" />
                  <Text style={styles.text}>{item.question}</Text>
                </View>
                <View style={[styles.view, styles.answer]}>
                  <FontAwesome name="user-secret" size={24} color="black" />
                  <Text style={styles.text}>{item.answer}</Text>
                </View>
              </View>
            )}
          />
        ) : (
          <View
            style={{
              ...styles.container,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              No questions found
            </Text>
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new question"
            value={newQuestion}
            onChangeText={(text) => setNewQuestion(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddQuestion}
          >
            <Text style={styles.buttonText}>Add Question</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    alignItems: "flex-start",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  view: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16, // Adjust the font size as needed
    color: "#333", // Adjust the text color as needed
    width: "90%",
  },
  inputContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 16, // Adjust the font size as needed
    color: "#333", // Adjust the text color as needed
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18, // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight as needed
  },
  answer: {
    marginTop: 10,
  },
});
