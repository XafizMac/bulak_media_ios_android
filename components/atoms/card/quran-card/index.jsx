import { StyleSheet, Text, View, ImageBackground, Platform } from "react-native";
import React from "react";
import background from "../../../../assets/img/quran1.jpg";
import { FontAwesome5 } from "@expo/vector-icons";

const OS = Platform.OS;
const QuranCard = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.card}
      >
        <View style={styles.info}>
          <View style={styles.lastRead}>
            <FontAwesome5 name="book-open" size={20} color="white" />
            <Text style={styles.lastReadText}>последнее чтение</Text>
          </View>
          <View style={styles.lastSura}>
            <Text style={styles.lastSuraTitle}>Аль-Фатиха</Text>
            <Text style={styles.lastSuraAyah}>Айат № 1</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuranCard;

const styles = StyleSheet.create({
  main: {
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
    marginTop: OS === "ios" ? 210 : 20
  },
  card: {
    height: 150,
    borderTopEndRadius: 50,
    padding: 20,
  },
  info: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  lastRead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  lastReadText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Bold",
  },
  lastSura: {
    flexDirection: "column",
    gap: 10,
  },
  lastSuraTitle: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 20,
  },
  lastSuraAyah: {
    color: "white",
    fontFamily: "Medium",
  },
});
