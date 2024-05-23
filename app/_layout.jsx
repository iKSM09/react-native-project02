import React from "react";
import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsContextProvider from "../core/restaurants/restaurants.context";
import { LocationContextProvider } from "../core/location/location.context";

export default function RootLayout() {
  return (
    <>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" backgroundColor="lightblue" />
    </>
  );
}
