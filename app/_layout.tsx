import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="h-full items-center justify-center bg-white">
        <Text className="">Uber Clone!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
