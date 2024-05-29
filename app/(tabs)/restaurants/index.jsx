import React, { useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Link, router, useNavigation } from "expo-router";
import { ActivityIndicator, MD3Colors } from "react-native-paper";

import SafeArea from "../../../components/SafeArea";
import Search from "../../../components/Search";
import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";

import { RestaurantsContext } from "../../../core/restaurants/restaurants.context";

export default function Restaurants() {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const navigation = useNavigation();

  return (
    <SafeArea>
      {isLoading && (
        <View style={styles.loadingView}>
          <ActivityIndicator
            size={50}
            style={styles.loadingIndicator}
            animating={true}
            color={MD3Colors.primary50}
          />
        </View>
      )}

      <Search />
      <FlatList
        data={restaurants}
        // renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        renderItem={({ item }) => (
          <Link
            href={`restaurants/${item.name}?placeId=${item.placeId}`}
            asChild
          >
            <TouchableOpacity>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          </Link>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.restaurantList}
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  loadingIndicator: {
    marginLeft: -25,
  },
  restaurantList: { paddingHorizontal: 18, paddingBottom: 20, gap: 20 },
});
