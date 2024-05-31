import Button from "components/globals/Button";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <MotiView
      key="Home"
      from={{
        opacity: 0,
        translateY: 100,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      exit={{
        opacity: 0,
        direction: "rtl",
        translateY: 100,
      }}
      transition={{
        type: "timing",
        duration: 300,
      }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
        <Button
          onPress={() => router.replace("/(auth)/Welcome")}
          title="Back"
        />
      </View>
    </MotiView>
  );
};

export default Home;
