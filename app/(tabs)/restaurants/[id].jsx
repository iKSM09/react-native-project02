import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { List, Text } from "react-native-paper";

import { RestaurantsContext } from "../../../core/restaurants/restaurants.context";
import SafeArea from "../../../components/SafeArea";
import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";
import { RestaurantRating } from "../../../components/restaurant-rating.component";
import { RestaurantStatus } from "../../../components/restaurant-status.component";

const RestaurantDetail = () => {
  const { placeId } = useLocalSearchParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  console.log({ restaurants });
  const item = restaurants.filter((detail) => detail.placeId === placeId)[0];
  console.log({ item });

  return (
    <>
      <Stack.Screen
        options={{
          title: item.name,
        }}
      />
      <SafeArea header>
        <Image
          source={item.photos[0]}
          contentFit="cover"
          style={styles.image}
        />
        <View style={styles.details}>
          <Text variant="titleLarge">{item.name}</Text>
          <Text variant="labelLarge">{item.address}</Text>
          <View style={styles.iconContainer}>
            <RestaurantRating rating={item.rating} placeId={item.placeId} />
            <RestaurantStatus
              isOpen={item.isOpenNow}
              isClosed={item.isClosedTemporarily}
              icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png"
            />
          </View>
        </View>

        <ScrollView>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </ScrollView>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "160",
    backgroundColor: "#0553",
  },
  details: {
    marginVertical: 12,
    marginHorizontal: 18,
  },
  iconContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default RestaurantDetail;

// <RestaurantInfoCard restaurant={item} mode="contained" />
