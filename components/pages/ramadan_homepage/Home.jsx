import { View, StyleSheet } from "react-native";
import React from "react";
import CurrentTime from "../../atoms/currentTime/CurrentTime";
import BottomContent from "../../molecules/bottom-content";
import MyLocation from "../../atoms/my_location/MyLocation";
export default function Home() {
  return (
    <View style={styles.main}>
      <MyLocation />
      <CurrentTime />
      <BottomContent />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#2E0A30",
    height: "100%",
  }
});