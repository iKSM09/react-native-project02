import React from "react";
import { Stack } from "expo-router";

export default function RestaurantsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Restaurants", headerShown: false }}
      />
      <Stack.Screen
        name="[id]"
        // options={{ headerShown: false }}
      />
    </Stack>
  );
}
