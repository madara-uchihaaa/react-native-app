import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MyButton from "../components/Button";
import { UserLogin } from "../models/user";
import { Link } from "@react-navigation/native";
import useUserStore from "../store/auth";

export default function SignIn() {
  const userState = useUserStore((state) => state.user);

  const userLogin = new UserLogin({});
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Sign In</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <TextInput
          style={styles.formControl}
          placeholder="Password"
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <MyButton title="Sign In" onPress={handleSubmit} />
        <Link
          style={{ marginTop: 10, color: "#007bff", marginBottom: 20 }}
          to={{ screen: "SignUp" }}
        >
          Don't have an account? Sign Up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(210,146,255,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "70%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  header: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  formControl: {
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    width: "80%",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
});
