import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const Home = () => {
  return <Redirect href={"/(auth)/welcome"} />;
};

export default Home;
