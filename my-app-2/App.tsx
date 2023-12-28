import "react-native-gesture-handler";
import Tabs from "./components/Tabs";
import ChatTab from "./components/ChatTab";
import useUserStore from "./store/auth";
import { useEffect, useState } from "react";
import { User } from "./models/user";

export default function App() {
  const user = useUserStore((state) => state.user);
  const [userState, setUserState] = useState(new User({}));

  console.log("in app.tsx", !userState || !userState.email);
  useEffect(() => {
    setUserState(user);
  }, []);

  return false ? <Tabs /> : <ChatTab />;
}
