import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function SafeArea({ children, header = false }) {
  if (header) {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
  }

  return (
    <SafeAreaView style={(styles.container, styles.header)}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
