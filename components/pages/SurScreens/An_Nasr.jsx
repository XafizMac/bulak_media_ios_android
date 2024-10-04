import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). إِذَا جَاء نَصْرُ اللَّهِ وَالْفَتْحُ
(2). وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا
(3). فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Изаа жаааа-'а насруЛЛооҳи уалл Фатх
(2). Уа ро-'айтан-нааса йадхулууна фии Диини-ЛЛааҳи 'аф-уаажаа
(3). Фасаббих би-Хамди Роббика уастағфирҳ 'Инна-Ҳуу каана Тау-уаабаа`;

const meaningKgText = `(1). "Качан Аллахдан жардам жана жеңиш келген кезде,
(2). жана да Аллахтын динине топ-тобу менен кирип жаткан элдерди көргөнүңдө,
(3). Ошондо Эгеңди мактоо менен даңктагын жана Андан кечирим сура. Албетте Ал тооболорду кабыл кылуучу!"`;

const meaningRusText = `(1). "(1). Когда придет помощь Аллаха и настанет победа,
(2). когда ты увидишь, как люди толпами обращаются в религию Аллаха,
(3). восславь же хвалой Господа своего и попроси у Него прощения. Воистину, Он – Принимающий покаяния.`;

export default function Al_Nasr() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "НАСР СҮРӨӨСҮ" : "аль-Наср"}
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
