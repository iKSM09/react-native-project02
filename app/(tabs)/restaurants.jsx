import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, MD3Colors, Searchbar } from "react-native-paper";

import { RestaurantsContext } from "../../core/restaurants/restaurants.context";

import SafeArea from "../../components/SafeArea";
import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";

export default function Restaurants() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");

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

      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
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
  search: { paddingTop: 16, paddingHorizontal: 18, paddingBottom: 20 },
  restaurantList: { paddingHorizontal: 18, paddingBottom: 20, gap: 20 },
});
