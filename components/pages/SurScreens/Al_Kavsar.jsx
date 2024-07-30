import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
(2). فَصَلِّ لِرَبِّكَ وَانْحَرْ
(3). إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). 'Иннаааа 'аътойнаакал-КАУСАР
(2). Фасолли ли-Роббика уанхар
(3). 'Инна шаани-'ака ҳу-уал-'абтар`;

const meaningKgText = `(1). Акыйкатта, Биз сага "Кавсарды" таттуу кылдык,
(2). Эми Эгеңе (сыйынып) намаз оку жана курбандык чал
(3). Ырасында, сени капаланткан - өзү шордуу`;

const meaningRusText = `(1). Мы даровали тебе Изобилие (реку в Раю, которая называется аль-Каусар).
(2). Посему совершай намаз ради своего Господа и закалывай жертву.
(3). Воистину, твой ненавистник сам окажется бездетным.`;

export default function Al_Kavsar() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "КАУСАР СҮРӨӨСҮ" : "аль-Кавсар"}
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
