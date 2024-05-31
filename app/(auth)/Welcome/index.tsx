import Button from "components/globals/Button";
import { useRouter } from "expo-router";
import { AnimatePresence, MotiView } from "moti";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import backImage from "../../../assets/images/background.jpg";
const Index = () => {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <MotiView
        key="welcome"
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
        <View style={styles.container}>
          <ImageBackground source={backImage} style={styles.background} />
          <Button
            title="Welcome"
            onPress={() => router.replace("/(main)/Home")}
          />
        </View>
      </MotiView>
    </AnimatePresence>
  );
};

export default Index;
export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
});
