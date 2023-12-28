import "react-native-gesture-handler";
import Tabs from "./components/Tabs";
import ChatTab from "./components/ChatTab";
import useUserStore from "./store/auth";

export default function App() {
  const user = useUserStore((state) => state.user);
  const a = 1;
  return !a ? <Tabs /> : <ChatTab />;
}
