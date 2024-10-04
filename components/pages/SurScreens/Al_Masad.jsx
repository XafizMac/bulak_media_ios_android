import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ
(2). مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ
(3). سَيَصْلَى نَارًا ذَاتَ لَهَبٍ
(4). وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ
(5). فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Таббат йадаааа 'Абии Лаҳаби у-уа табб
(2). Маа 'ағнаа ъанҳу маалуҳуу уа маа касаб
(3). Са-йаслаа Наарон-заата лаҳаб
(4). Уамро-'атуҳуу хаммаалатал-хатоб
(5). Фии жиидиҳаа хаблум-мим-масад`;

const meaningKgText = `(1). Абу Лахабдын эки колу куурап калсын! Ал куурады
(2). Ага анын байлыгы да, кесиби да эч жардам кыла алган жок
(3). Ал алоологон отто азапталат
(4). Отун көтөргөн айалы да
(5). Анын мойнунда эшилген жиби (бар)`;

const meaningRusText = `(1). Да отсохнут руки Абу Лахаба, и сам он уже сгинул.
(2). Не помогло ему богатство, и он ничего не приобрел.
(3). Он попадет в пламенный Огонь.
(4). Жена его будет носить дрова,
(5). а на шее у нее будет плетеная веревка из пальмовых волокон.`;

export default function Al_Masad() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "МАСАД СҮРӨӨСҮ" : "аль-Масад"}
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
