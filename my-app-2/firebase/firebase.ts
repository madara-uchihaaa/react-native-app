import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDeOgqtwg0ge8eH14LYIqEYBLnXGaGZx0U",
  authDomain: "react-native-b64f6.firebaseapp.com",
  projectId: "react-native-b64f6",
  storageBucket: "react-native-b64f6.appspot.com",
  messagingSenderId: "103564528187",
  appId: "1:103564528187:web:27609761470372edcaaa1e"
};

export const firebaseApp = initializeApp(firebaseConfig);
initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const firebaseAuth = getAuth(firebaseApp);
