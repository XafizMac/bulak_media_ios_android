import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
(2). مِن شَرِّ مَا خَلَقَ
(3). وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
(4). وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
(5). وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қул 'а-ъуузу би-Роббил-Фалақ
(2). Мин-шарри маа холақ
(3). Уа мин-шарри ғоосикин 'изаа уақоб
(4). Уа мин-шаррин-Наффаасаати фил -ъуқод
(5). Уа мин-шарри хаасидин 'изаа хасад`;

const meaningKgText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: "Сактанам таңдын Эгеси менен
(2). Ал жараткан нерселердин жамандыгынан,
(3). Караңгылык каптагандагы анын жамандыгынан,
(4). Түйүндөргө сыйкырлоочулардын кастыгынан,
(5). Көрө албастардын кызгангандагы жамандыгынан"`;

const meaningRusText = `(1). Скажи: «Прибегаю к защите Господа рассвета
(2). от зла того, что Он сотворил,
(3). от зла мрака, когда он наступает,
(4). от зла колдуний, дующих на узлы,
(5). от зла завистника, когда он завидует».`;

export default function AlFalak() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "ФАЛАК СҮРӨӨСҮ" : "аль-Фаляк"}
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
