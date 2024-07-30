import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import background from "../../../assets/backgrouds/iftar-back.jpeg";
import { LinearGradient } from "expo-linear-gradient";

const SuhurAndIftarDua = ({ route }) => {
  const { data } = route.params;
  return (
    <View style={styles.main}>
      <LinearGradient
        style={styles.linear}
        colors={["transparent", "#2E0A30"]}
      />
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={{
          width: "100%",
          height: 300,
          position: "absolute",
          zIndex: -10,
        }}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{ overflow: "hidden", borderRadius: 20, paddingBottom: 100 }}
          >
            <View style={{ padding: 10 }}>
              {data == 1 ? (
                <View style={{ flexDirection: "column", gap: 10 }}>
                  <Text style={styles.title}>
                    Намерение, которое произносят во время сухура. 
                  </Text>
                  <Text style={styles.arabik}>
                    نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرِ رَمَضَانَ مِنَ الْفَجْرِ
                    إِلَى الْمَغْرِبِ خَالِصًا لِلَّهِ تَعَالَى
                  </Text>
                  <Text style={styles.kiril}>
                    Навайту ан-асуума саума шяхри рамадаан миняль фаджри иляль
                    магрииби хаалисан лилляяхи тя’ааля
                  </Text>
                  <Text style={styles.slovo}>Перевод:</Text>
                  <Text style={styles.kiril}>
                    Я намерился держать пост месяца рамадан от рассвета до
                    заката искренне ради Аллаха».
                  </Text>
                </View>
              ) : (
                <View style={{ flexDirection: "column", gap: 10 }}>
                  <Text style={styles.title}>
                    Намерение, которое произносят во время ифтара. 
                  </Text>
                  <Text style={styles.arabik}>
                    اَللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ
                    تَوَكَّلْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ. فَاغْفِرْ لِي يَا
                    غَفَّارُ مَا قَدَّمْتُ وَ مَا أَخَّرْتُ
                  </Text>
                  <Text style={styles.kiril}>
                    “Аллахумма лякя сумту, ва бикя ааманту, ва ‘аляйкя
                    таваккяльту, ва ‘аля ризкыкя афтарту, фагфирлии йя гаффаару
                    маа каддамту ва маа аххарту.” 
                  </Text>
                  <Text style={styles.slovo}>Перевод:</Text>
                  <Text style={styles.kiril}>
                     “О Аллах,  ради Тебя я постился, в Тебя уверовал, на Тебя
                    положился, Твоей пищей разговелся.    О, Прощающий, прости
                    мне грехи, что я совершил или совершу”
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SuhurAndIftarDua;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    paddingTop: 200,
  },
  title: {
    color: "#F2BB4A",
    fontSize: 20,
    fontFamily: "Bold",
    textAlign: "center",
  },
  arabik: {
    color: "white",
    fontSize: 24,
    fontFamily: "ArabicMedium",
    textAlign: "center",
  },
  kiril: {
    color: "white",
    fontSize: 18,
    fontFamily: "Medium",
    lineHeight: 25,
  },
  slovo: {
    color: "#F2BB4A",
    fontSize: 20,
    fontFamily: "Bold",
  },
  linear: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: 0,
    zIndex: 0,
  },
});
