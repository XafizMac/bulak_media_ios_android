import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import icon from "../../../assets/icons/icon.png";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const AyahButton = ({ name, nameLatin, place, index, verses }) => {
  const navigation = useNavigation();

  const goToTheSuhar = () => {
    navigation.navigate("Surah", {
      id: index,
    });
  };

  return (
    <Pressable onPress={goToTheSuhar}>
      <View style={styles.button}>
        <View style={styles.left}>
          <ImageBackground source={icon} resizeMode="cover" style={styles.icon}>
            <Text style={styles.number}>{index}</Text>
          </ImageBackground>
          <View style={styles.info}>
            <Text style={styles.name}>{nameLatin}</Text>
            <Text style={styles.about}>
              {place} - {verses} айат
            </Text>
          </View>
        </View>
        <Text style={styles.right}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default AyahButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(123, 128, 173, .35)",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    width: 40,
    height: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 18,
  },
  info: {
    flexDirection: "column",
    gap: 5,
  },
  name: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 18,
  },
  about: {
    color: "#A19CC5",
    fontFamily: "Medium",
    fontSize: 16,
  },
  right: {
    color: "#F2BB4A",
    fontFamily: "ArabicMedium",
    fontSize: 24,
  },
});
