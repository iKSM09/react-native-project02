import React from "react";
import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsContextProvider from "../core/restaurants/restaurants.context";

export default function RootLayout() {
  return (
    <>
      <RestaurantsContextProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RestaurantsContextProvider>
      <ExpoStatusBar style="auto" backgroundColor="lightblue" />
    </>
  );
}
