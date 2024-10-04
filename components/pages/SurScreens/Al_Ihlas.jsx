import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ هُوَ اللَّهُ أَحَدٌ
(2). اللَّهُ الصَّمَدُ
(3). لَمْ يَلِدْ وَلَمْ يُولَدْ
(4). وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қуль ҳу-уа-ЛЛооҳу 'Ахад
(2). 'АЛЛООҳус-Сомад
(3). Лам йалид, уа лам йуулад
(4). Уа лам йакул-ла-Ҳуу куфу-уан 'ахад`;

const meaningKgText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: Аллах Жалгыз!
(2). Аллах эч кимге муктаж эмес!
(3). (Ал) төрөбөгөн жана төрөлбөгөн
(4). Ага эч ким теңдеш эмес`;

const meaningRusText = `(1). Скажи: «Он – Аллах Единый,
(2). Аллах Самодостаточный.
(3). Он не родил и не был рожден,
(4). и нет никого, равного Ему».`;

export default function Al_Ihlas() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "ИХЛАС СҮРӨӨСҮ" : "аль-Ихляс"}
            arabicText={arabicText}
            rusText={rusText}
            meaningText={lang === "kg" ? meaningKgText : meaningRusText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    paddingBottom: 30,
    paddingTop: 20,
  },
});
