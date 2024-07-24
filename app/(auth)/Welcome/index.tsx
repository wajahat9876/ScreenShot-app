import { useIsFocused } from "@react-navigation/native";
import { incrementProgress, setRouteState } from "@store/slices/userSlice";
import { getRespValue } from "@utils/design/design";
import Button from "components/globals/Button";
import { useRouter } from "expo-router";
import { AnimatePresence, MotiView } from "moti";
import React, { useEffect, useRef } from "react";
import { BackHandler, Dimensions, ImageBackground, StyleSheet, ToastAndroid, View } from "react-native";
import * as Progress from "react-native-progress";
import { useDispatch } from "react-redux";
import backImage from "../../../assets/images/background.jpg";
const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
//double click exit app
const isFocused = useIsFocused();
const backPressCountRef = useRef(0);

useEffect(() => {
  const backHandler = () => {
    if (backPressCountRef.current === 1) {
      BackHandler.exitApp();
    } else {
      backPressCountRef.current += 1;
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
      setTimeout(() => {
        backPressCountRef.current = 0;
      }, 2000);
    }
    return true;
  };

  if (isFocused) {
    BackHandler.addEventListener('hardwareBackPress', backHandler);
  } else {
    BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }
  return () =>
    BackHandler.removeEventListener('hardwareBackPress', backHandler);
}, [isFocused]);
  return (
    <AnimatePresence exitBeforeEnter={true}>
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
          <View style={styles.contentContainer}>
            <Progress.Bar
              progress={0.2}
              width={300}
              color="orange"
              height={8}
              style={{ backgroundColor: "white" }}
            />
            <Button
              buttonStyle={{ marginTop: 300 }}
              title="Welcome"
              onPress={() => {
                router.replace("/(main)/Home");
                dispatch(setRouteState(true));
                dispatch(incrementProgress(20));
              }}
            />
            
          </View>
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
    zIndex: 2000,
  },
  contentContainer: {
    paddingTop: getRespValue(100),
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
