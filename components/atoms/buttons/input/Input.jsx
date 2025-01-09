import { View, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import search from "../../../../assets/img/search.png";

export default function Input({ handleChangeText }) {
  return (
    <View style={styles.inputArea}>
      <TextInput
        onChangeText={handleChangeText}
        placeholderTextColor="white"
        style={styles.input}
        inputMode="numeric"
        maxLength={10}
        placeholder={"Введите номер страницы"}
      />
      <Image style={styles.img} width={10} source={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 15,
    backgroundColor: "#431146",
  },
  input: {
    fontFamily: "Medium",
    color: "white",
    fontSize: 16,
    flexGrow: 1,
    paddingLeft: 5,
  },
  img: {
    width: 30,
    height: 30,
  },
});
