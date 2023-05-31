import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

import theme from './src/global/styles/theme';
import Routes from './src/routes';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }} >
      <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#FFF"
        translucent = {false}
        networkActivityIndicatorVisible = {true} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </View>
  );
}
