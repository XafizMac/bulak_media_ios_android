import React, { useCallback, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native"
import dataOfSurah from "../../../data/surat.json"
import QuranCard from "../../atoms/quran-card"
import AyahButton from "../../atoms/quranAyahBtn"
import { useFocusEffect, useNavigation } from "@react-navigation/native"


const QuranPage = () => {
  const [originalData] = useState(dataOfSurah);
  const [data, setData] = useState(dataOfSurah);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerTitle: "Курани Карим",
        headerLargeTitle: true,
        headerShown: true,
        headerTintColor: "white",
        cancelButtonText: "Отмена",
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: "Bold"
        },
        headerLargeTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#2E0A30",
          color: "white"
        },
        heeaderStyle: {
          height: 200
        },
        headerSearchBarOptions: {
          placeholder: "Поиск",
          textColor: "white",
          headerIconColor: "white",
          onChangeText: (event) => {
            handleChangeText(event.nativeEvent.text);
          }
        },
      })
    }, [])
  )

  const handleChangeText = (text) => {
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
    <ScrollView style={styles.scrollview}>
      <View style={styles.main}>
        <View style={styles.container}>
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
          {originalData && (
            <View style={styles.surContainer}>
              <FlatList
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
                )}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default QuranPage;

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#2E0A30",
    width: "100%",
    height: "50%",
  },
  main: {
    flex: 1,
    backgroundColor: "#2E0A30",
    width: "100%",
    height: "50%",
  },
  container: {
    paddingHorizontal: 12,
    flexDirection: "column",
  },
  title: {
    fontFamily: "Bold",
    color: "white",
    fontSize: 24,
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
    height: "100%",
    paddingBottom: 120,
    overflow: "hidden",
  }
});
