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
  ScrollView,
} from "react-native";
import useUserStore from "../store/auth";
import { FontAwesome } from "@expo/vector-icons";
import { Chat } from "../models/chat";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function Question() {
  const [question, setQuestion] = useState(new Chat({}));
  const [newQuestion, setNewQuestion] = useState("");

  const user = useUserStore((state) => state.user);

  const handleAddQuestion = async () => {
    setNewQuestion("");
    question.question = newQuestion;
    question.answer = "";
    setQuestion(question);

    try {
      const ans = await axios.post(
        "http://192.168.1.5:5000/ask",
        JSON.stringify({ question: newQuestion }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      // console.log(ans);
      question.answer = ans.data.response;
      setQuestion(question);
      console.log(question, "question");
    } catch (error) {
      console.log("Error while ans fetch", error);
    }
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={styles.item}>
        <View style={styles.view}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={styles.text}>{question.question}</Text>
        </View>
        <View style={[styles.view, styles.answer]}>
          <FontAwesome name="user-secret" size={24} color="black" />
          <Text style={styles.text}>{question.answer}</Text>
        </View>
      </View>
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
          disabled={!newQuestion}
        >
          <Text style={styles.buttonText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  view: {
    flexDirection: "row",
    width: "80%",
    margin: "auto",
    backgroundColor: "#F0F0F0",
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
