import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../atoms/card/javshan-card/Card";

export const Javshan = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    paddingBottom: 180,
  },
});
