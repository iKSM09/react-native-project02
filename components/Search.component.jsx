import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../core/location/location.context";

export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: { paddingTop: 16, paddingHorizontal: 18, paddingBottom: 20 },
});
