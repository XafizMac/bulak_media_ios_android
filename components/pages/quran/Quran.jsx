import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  FlatList,
} from "react-native"
import dataOfSurah from "../../../data/surat.json"
import QuranCard from "../../atoms/quran-card"
import AyahButton from "../../atoms/quranAyahBtn"
import QuranInput from "../../atoms/quranInput"
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

const Quran = () => {
  const [originalData] = useState(dataOfSurah);
  const [data, setData] = useState(dataOfSurah);
  const [filterText, setFilteredText] = useState("");
  const [isInput, setIsInput] = useState(false);

  const handleSwitch = () => setIsInput(!isInput);

  const handleChangeText = (text) => {
    setFilteredText(text);
    filterData(text);
  };

  // Фильтрация по названием суры
  const filterData = (text) => {
    const filteredData = originalData.filter((item) =>
      item.namaLatin.toLowerCase().startsWith(text.toLowerCase()),
    );
    setData(filteredData.length > 0 && filteredData);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          {isInput ? (
            <QuranInput handleChangeText={handleChangeText} />
          ) : (
            <Text style={styles.title}>Курани Карим</Text>
          )}
          <Pressable onPress={handleSwitch}>
            {isInput ? (
              <AntDesign name="close" size={28} color="white" />
            ) : (
              <Feather name="search" size={28} color="white" />
            )}
          </Pressable>
        </View>
        <View>
          <QuranCard />
        </View>
        <View style={styles.tabContent}>
          <View style={styles.tab}>
            <Text style={styles.activeTab}>Суры</Text>
            <Text style={styles.nonActiveTab}>На арабском</Text>
          </View>
          <View style={styles.line}>
            <View style={styles.activeLine}></View>
          </View>
        </View>
        {originalData ? (
          <View style={styles.surContainer}>
            <FlatList
              style={styles.surContainerList}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => (
                <AyahButton
                  key={index}
                  name={item.nama}
                  nameLatin={item.namaLatin}
                  index={item.nomor}
                  place={item.tempatTurun}
                  verses={item.jumlahAyat}
                />
              )
              }
            />
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    flexDirection: "column",
    paddingBottom: 130,
  },
  title: {
    fontFamily: "Bold",
    color: "white",
    fontSize: 24,
  },
  header: {
    marginTop: 60,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    gap: 14,
    paddingBottom: 20,
  },
  tabContent: {
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activeTab: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 16,
  },
  nonActiveTab: {
    color: "#A19CC5",
    fontFamily: "Medium",
    fontSize: 16,
  },
  line: {
    width: "100%",
    height: 4,
    backgroundColor: "rgba(135, 137, 163, .2)",
  },
  activeLine: {
    width: 80,
    backgroundColor: "#F2BB4A",
    height: "100%",
  },
  surContainer: {
    height: "70%",
    marginBottom: "200px",
    overflow: "hidden",
    paddingBottom: 200
  },
  surContainerList: {
    overflow: "visible",
    marginBottom: "200px",
  },
  notFoundText: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
