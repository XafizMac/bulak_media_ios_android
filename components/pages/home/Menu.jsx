import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Menu_buttons from "../../molecules/menu_buttons/Menu_buttons";

// Импорт языка
import { useLanguageState } from "../../../states/language/useLanguageState";
export const Menu = () => {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <Menu_buttons />
        </View>
      </ScrollView>
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
    paddingTop: 60,
  },
});
