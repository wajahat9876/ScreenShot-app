import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { AnimatePresence } from "moti";
import React from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { useColorScheme } from "../hooks/useColorScheme";
// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatePresence exitBeforeEnter>
        <Stack screenOptions={{ headerShown: false }} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default RootLayout;
