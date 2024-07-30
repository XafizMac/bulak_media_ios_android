import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import Times from "../../atoms/prayer-times/Times"
import CurrentTime from "../../atoms/currentTime/CurrentTime";
import BottomContent from "../../molecules/bottom-content";
import PrayerTimes from "../../../api";
import MyLocation from "../../atoms/my_location/MyLocation";
export default function Home() {

  return (
    <View style={styles.main}>
      <MyLocation/>
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
  },
  container: {
    height: "100%",
    paddingHorizontal: 12,
  },
  main_row: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  },
});
