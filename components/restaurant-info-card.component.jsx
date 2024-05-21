import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { RestaurantRating } from "./restaurant-rating.component";
import { RestaurantStatus } from "./restaurant-status.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <View>
      <Card>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
        <Card.Title title={name} titleVariant="titleLarge" />
        <Card.Content>
          <View style={styles.iconContainer}>
            <RestaurantRating rating={rating} />
            <RestaurantStatus
              isOpen={isOpenNow}
              isClosed={isClosedTemporarily}
              icon={icon}
            />
          </View>
          <Text variant="bodyMedium">{address}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
