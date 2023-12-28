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

export default function Question() {
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    setNewQuestion("");
    // Add logic to update the chat array with the new question
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new question"
        value={newQuestion}
        onChangeText={(text) => setNewQuestion(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddQuestion}>
        <Text style={styles.buttonText}>Add Question</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
