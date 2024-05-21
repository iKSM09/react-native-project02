import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MD3Colors, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import open from "../assets/open";

export const RestaurantStatus = ({ isOpen, isClosed, icon }) => {
  return (
    <View style={styles.statusContainer}>
      {isClosed && (
        <Text
          variant="labelMedium"
          theme={{ colors: { onSurface: MD3Colors.error50 } }}
        >
          CLOSED TEMPORARILY
        </Text>
      )}
      {isOpen && <SvgXml xml={open} width={24} height={24} />}
      <Image source={{ uri: icon }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 16,
    height: 16,
  },
});
