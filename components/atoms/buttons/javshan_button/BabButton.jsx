import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BabButton({ num, number, setNumber }) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Bab", { page: num });
    setNumber(num);
  };

  return (
    <Pressable onPress={handleClick}>
      <View style={[styles.button, {
        marginHorizontal: num % 2 == 0 ? 16 : 0,
      }]}>
        <Text style={styles.text}>{num}-страница</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#461151",
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
    width: Dimensions.get("screen").width / 2 - 20,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Bold",
  },
});
