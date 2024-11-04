import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="+not-found" options={{title:'Not Found'}}/>
    </Stack>
  );
}
