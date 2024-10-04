import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ أَعُوذُ بِرَبِّ النَّاسِ
(2). مَلِكِ النَّاسِ
(3). إِلَهِ النَّاسِ
(4). مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
(5). الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
(6). مِنَ الْجِنَّةِ وَ النَّاسِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қул а-ъуузу би-Роббин-наас
(2). Маликин-Наас
(3). 'Илааҳин-Наас
(4). Мин-шаррил-Уас-уаасил -хон-Наас
(5). 'Аллазии йу-уас-уису фии судуурин-Наас
(6). Минал-Жиннати уан-Наас`;

const meaningKgText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: "Сактанам адамдардын Эгеси менен,
(2). (Ал) адамдардын падышасы,
(3). (Ал) адамдардын Кудайы
(4). Жашырынган азгыруучунун жамандыгынан,
(5). Ал адамдардын жүрөктөрдүн азгырат,
(6). (Алар) жиндер жана адамдардан (болот)"`;

const meaningRusText = `(1). Скажи: «Прибегаю к защите Господа людей,
(2). Царя людей,
(3). Бога людей,
(4). от зла искусителя исчезающего при поминании Аллаха,
(5). который наущает в груди людей,
(6). от джиннов и людей`;

export default function AnNas() {
  const lang = useLanguageState();
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "НАС СҮРӨӨСҮ" : "ан-Нас"}
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
