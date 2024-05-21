import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";

import star from "../assets/star";

export const RestaurantRating = ({ rating = 1 }) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View style={styles.rating}>
      {ratingArray.map((index) => (
        <SvgXml xml={star} width={24} height={24} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    paddingBottom: 4,
  },
});
