import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `سْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). لِإِيلَافِ قُرَيْشٍ
(2). إِيلَافِهِمْ رِحْلَةَ الشِّتَاء وَالصَّيْفِ
(3). فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ
(4). الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Ли-'йлаафи ҚУРОйШ
(2). 'Йлаафиҳим рихляташ-шитаааа-'и уас-сойф
(3). Фал-йаъбудуу Робба ҳаазаль-Байт
(4). 'Аллазииии 'ат-ъамаҳум-мин - жуу - ъи у-уа 'ааманаҳум - мин Хоуф`;

const meaningKgText = `(1). Курейштер көнүккөн нерселери үчүн,
(2). (б.а.) кышкы жана жайкы сапарга көнүккөндөрү үчун,
(3). Бул үйдүн Ээсине сыйынышсын!
(4). Ал ачкалыкта аларды тамактандырып, коркунучтан аларды аман сактаган`;

const meaningRusText = `(1). Ради единения курайшитов,
(2). единения их во время зимних и летних поездок.
(3). Пусть же они поклоняются Господу этого Дома (Каабы),
(4). Который накормил их после голода и избавил их от страха.`;

export default function Kuraysh() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "КУРАЙШ СҮРӨӨСҮ" : "аль-Курайиш"}
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
    paddingBottom: 130,
    paddingTop: 20,
  },
});
