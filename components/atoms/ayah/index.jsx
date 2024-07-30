import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Ayah = ({ arabicText, index, meaningText, translation }) => {
  const [saveAyah, setSaveAyah] = useState(false);

  return (
    <View style={styles.button}>
      <View style={styles.content}>
        <View style={styles.numberCirlce}>
          <Text style={styles.number}>{index + 1}</Text>
        </View>
        <View style={styles.specificIcons}>
          <TouchableOpacity>
            <AntDesign name="sharealt" size={24} color="#F2BB4A" />
          </TouchableOpacity>
          <Pressable onPress={() => setSaveAyah(!saveAyah)}>
            {!saveAyah ? (
              <MaterialIcons name="bookmark-border" size={28} color="#F2BB4A" />
            ) : (
              <MaterialIcons name="bookmark" size={28} color="#F2BB4A" />
            )}
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "column", gap: 12 }}>
        <Text style={styles.arabic}>{arabicText}</Text>
        {translation && <Text style={styles.rus}>{meaningText}</Text>}
      </View>
    </View>
  );
};

export default Ayah;

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(123, 128, 173, .35)",
    paddingBottom: 30,
  },
  content: {
    backgroundColor: "#461151",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 13,
  },
  numberCirlce: {
    width: 30,
    height: 30,
    backgroundColor: "#F2BB4A",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
  number: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 20,
  },
  arabic: {
    fontFamily: "ArabicMedium",
    color: "white",
    fontSize: 28,
    textAlign: "right",
  },
  rus: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 18,
  },
  specificIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
