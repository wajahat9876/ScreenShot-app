import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import store from "@store/store";
import { Stack } from "expo-router";
import { AnimatePresence } from "moti";
import React from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useColorScheme } from "../hooks/useColorScheme";
// SplashScreen.preventAutoHideAsync();
const persistor = persistStore(store);
const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatePresence exitBeforeEnter={true}>
        <Stack screenOptions={{ headerShown: false }} />
      </AnimatePresence>
    </ThemeProvider>
    </PersistGate>
    </Provider>
  );
};

export default RootLayout;
