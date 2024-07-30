import { View, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
export default function QuranInput({ handleChangeText }) {
  return (
    <View style={styles.inputArea}>
      <TextInput
        onChangeText={handleChangeText}
        placeholderTextColor="#f3f3f3"
        style={styles.input}
        inputMode="text"
        maxLength={20}
        placeholder="Поиск"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#461151",
    flex: 1,
    borderWidth: 0.8,
    borderColor: "#69378F",
  },
  input: {
    fontFamily: "Medium",
    color: "white",
    fontSize: 16,
    padding: 10,
    width: "100%",
    paddingLeft: 10,
  },
});
