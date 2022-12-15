import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/pages/Products";
import Detail from "./src/pages/Detail";
import Login from "./src/pages/Login";
import { useSelector } from "react-redux";
import AuthProvider from "./src/context/AuthProvider/AuthProvider";
import Wrapper from "./src/Wrapper";

export default function App() {
  return (
    <AuthProvider>
      <Wrapper />
    </AuthProvider>
  );
}
