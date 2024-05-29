import React from "react";
import { Tabs } from "expo-router";
import { Icon, MD3Colors } from "react-native-paper";
import { StyleSheet } from "react-native";

/**
 * @typedef {Object} Tab
 * @property {"restaurants"} restaurants - Text for the restaurants tab.
 * @property {"map"} map - Text for the map tab.
 * @property {"settings"} settings - Text for the settings tab.
 */

/** @type {Tab} */
// const TABS = {
//   restaurants: "restaurants",
//   map: "map",
//   settings: "settings",
// };

// const TAB_OPTIONS = {
//   restaurants: { title: "Restaurants", icon: "silverware" },
//   map: { title: "Map", icon: "map" },
//   settings: { title: "Settings", icon: "cog" },
// };

// const m = "map";
// console.log(TAB_OPTIONS[m]);

// const TabScreen = ({ route }) => {
//   const title = TAB_OPTIONS[route].title;
//   const icon = TAB_OPTIONS[route].icon;

//   return (
//     <Tabs.Screen
//       name="restaurants"
//       options={{
//         title: title,
//         // eslint-disable-next-line react/no-unstable-nested-components
//         tabBarIcon: ({ color }) => (
//           <Icon source={icon} color={color} size={28} />
//         ),
//       }}
//     />
//   );
// };

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: MD3Colors.primary40,
        tabBarInactiveTintColor: MD3Colors.neutral60,
        tabBarStyle: {
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 4,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="restaurants"
        options={{
          title: "Restaurants",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon source="silverware" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon source="map" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon source="cog" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}

// <TabScreen route={TABS.restaurants} />
// <TabScreen route={TABS.map} />
// <TabScreen route={TABS.settings} />
