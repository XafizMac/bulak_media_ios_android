import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ يَا أَيُّهَا الْكَافِرُونَ
(2). لَا أَعْبُدُ مَا تَعْبُدُونَ
(3). وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
(4). وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ
(5). وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
(6). لَكُمْ دِينُكُمْ وَلِيَ دِينِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Қул йаааа-'аййуҳал-КААФИРУУН
(2). Лаааа 'аъбуду маа таъбудуун
(3). Уа лааа 'антум ъаабидууна маааа 'аъбуд
(4). Уа лаааа 'ана ъаабидум-маа ъабаттум
(5). Уа лаааа 'антум ъаабидууна маааа 'аъбуд
(6). Лакум Диинукум уа лийа Диин`;

const meaningKgText = `(1). Айткын: "Эй, капырлар!
(2). Мен силер сыйынган нерселерге сыйынбаймын,
(3). Силер дагы мен сыйынган (Аллахка) сыйынбайсыңар,
(4). Дагы да - мен силер сыйынган нерселерге сыйынбаймын,
(5). жана да силер мен сыйынган (Аллахка) сыйынбайсыңар,
(6). Силердин диниңер - озүңөр үчүн, а менин диним - өзүм үчүн"`;

const meaningRusText = `(1). Скажи: «О неверующие!
(2). Я не поклоняюсь тому, чему поклоняетесь вы,
(3). а вы не поклоняетесь Тому, Кому поклоняюсь я.
(4). Я не поклоняюсь так, как поклоняетесь вы (или тому, чему поклоняетесь вы),
(5). а вы не поклоняетесь так, как поклоняюсь я (или Тому, Кому поклоняюсь я).
(6). Вы исповедуете свою религию, а я исповедую свою!»`;

export default function Al_Kafirun() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "КАФИРУН СҮРӨӨСҮ" : "аль-Кафирун"}
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
