import { useFocusEffect } from "@react-navigation/native";
import ChatBot from "components/Screens/ChatBot";
import Home from "components/Screens/Home/Home";
import { useRouter } from "expo-router";
import useMultistepForm from "hooks/useMultiStepForm";
import { AnimatePresence } from "moti";
import React from "react";
import { BackHandler, View } from "react-native";

const index = () => {
  const router = useRouter();
     //BackHandler
 useFocusEffect(
  React.useCallback(() => {
    const onBackPress = () => {
      router.replace('/(auth)/Welcome');
      return true; // Prevent default back button behavior
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => backHandler.remove();
  }, []),
);
  const { step, goTo } = useMultistepForm([<Home />, <ChatBot />]);
  
  return (
    <View style={{ flex: 1 }}>
      <AnimatePresence exitBeforeEnter={true}>{step}</AnimatePresence>
    </View>
  );
};

export default index;
