import Home from "components/Screens/Home/Home";
import useMultistepForm from "hooks/useMultiStepForm";
import { AnimatePresence } from "moti";
import React from "react";
import { View } from "react-native";

const index = () => {
  const { step } = useMultistepForm([<Home />]);
  return (
    <View style={{ flex: 1 }}>
      <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>
    </View>
  );
};

export default index;
