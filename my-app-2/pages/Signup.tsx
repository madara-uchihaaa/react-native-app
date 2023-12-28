import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ProgressBarAndroid,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { UserRegister } from "../models/user";
import MyButton from "../components/Button";
import { Link } from "@react-navigation/native";
import useUserStore from "../store/auth";

export default function Signup({ navigation }) {
  const userState = useUserStore((state) => state.user);

  const userRegister = new UserRegister({});

  const userSignUp = useUserStore((state) => state.register);

  const [user, setUser] = React.useState(userRegister);
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    if (user.confirmPassword !== user.password) {
      Alert.alert("Passwords do not match");
      return false;
    }
    return true;
  };

  const signUp = async (event: any) => {
    if (!validate()) return;
    try {
      setLoading(true);
      userSignUp(user.email, user.password);
      Alert.alert("User created successfully");
    } catch (error) {
      Alert.alert(JSON.stringify(error).substring(0, 30));
    } finally {
      setLoading(false);
      setUser(userRegister);
    }
  };
  useEffect(() => {}, [userState]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Sign Up</Text>
        <TextInput
          style={styles.formControl}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={(text) => setUser({ ...user, firstName: text })}
        />
        <TextInput
          style={styles.formControl}
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={(text) => setUser({ ...user, lastName: text })}
        />
        <TextInput
          style={styles.formControl}
          placeholder="Email"
          value={user.email}
          keyboardType="email-address"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <TextInput
          style={styles.formControl}
          placeholder="Password"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <TextInput
          style={styles.formControl}
          secureTextEntry={true}
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChangeText={(text) => setUser({ ...user, confirmPassword: text })}
        />
        {loading ? (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            style={{
              width: "80%",
              marginBottom: 15,
            }}
          />
        ) : (
          <MyButton title="Sign Up" onPress={signUp} />
        )}
        <Link
          style={{ marginTop: 10, color: "#007bff", marginBottom: 20 }}
          to={{ screen: "SignIn" }}
        >
          Already have an account? Sign In
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
