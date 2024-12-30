import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState, useEffect } from "react";
import background from "../../../assets/img/quran2.png";
import image from "../../../assets/img/bismillah.png";
import Ayah from "../../atoms/ayah";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ModalContent, BottomModal } from "react-native-modals";
import QuranInput from "../../atoms/quranInput";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuranSurs = ({ navigation, route }) => {
  const [ayatList, setAyatList] = useState([]);
  const { id } = route.params;
  const [info, setInfo] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [translation, setTranslation] = useState(false);

  const API_URL = `https://equran.id/api/v2/surat/${id}`;

  useEffect(() => {
    setNavigationOptions();
    loadData();
  }, [id]);

  const setNavigationOptions = () => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <TouchableOpacity onPress={handleShowOptions}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  };

  const loadData = async () => {
    try {
      const cachedData = await AsyncStorage.getItem(`${id}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setInfo(parsedData.data);
        setAyatList(parsedData.data.ayat);
      } else {
        const response = await fetch(API_URL);
        const responseData = await response.json();
        const ayatData = responseData.data.ayat;
        const ayatInfo = responseData.data;
        setInfo(ayatInfo);
        setAyatList(ayatData);
        await AsyncStorage.setItem(`${id}`, JSON.stringify(responseData));
      }
    } catch (e) {
      console.log("Ошибка загрузки данных:", e);
    }
  };

  const handleChangeText = () => { };

  const handleShowOptions = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ overflow: "hidden", borderRadius: 20 }}>
            <ImageBackground
              style={styles.image}
              source={background}
              resizeMode="cover"
            >
              <View style={styles.cardDetails}>
                <View style={styles.top}>
                  <Text style={styles.name}>{info.namaLatin}</Text>
                  <Text style={styles.des}>
                    {(info.tempatTurun === "Mekah" && "МЕККЕ") ||
                      (info.tempatTurun === "Madinah" && "МАДИНА")}
                    - {info.jumlahAyat} АЙАТ
                  </Text>
                </View>
                <View style={styles.bottom}>
                  <Image
                    style={{ width: 200, height: 100, objectFit: "scale-down" }}
                    source={image}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ marginTop: 26 }}>
            {ayatList.length ? (
              <View style={{ flexDirection: "column", gap: 20 }}>
                {ayatList.map((ayah, index) => {
                  return (
                    <Ayah
                      translation={translation}
                      key={index}
                      index={index}
                      info={info}
                      arabicText={ayah.teksArab}
                      meaningText={ayah.teksIndonesia}
                      deleting={false}
                    />
                  );
                })}
              </View>
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </ScrollView>


        {/* Modal */}
        <BottomModal
          swipeDirection={["up", "down"]}
          visible={isModalOpen}
          swipeThreshold={200}
          modalTitle={
            <View style={styles.bottomModal}>
              <Text style={styles.modalTitle}>Настройки</Text>
              <TouchableOpacity onPress={() => setModalOpen(false)}>
                <AntDesign name="close" size={28} color="white" />
              </TouchableOpacity>
            </View>
          }
          onTouchOutside={() => setModalOpen(false)}
        >
          <ModalContent style={styles.modalContent}>
            <View style={styles.modalContentView}>
              <View style={styles.translation}>
                <Text style={styles.title}>Перевод</Text>
                <Switch
                  value={translation}
                  onValueChange={() => setTranslation(!translation)}
                  trackColor={{ false: "#000", true: "#2E0A30" }}
                  thumbColor="#F2BB4A"
                />
              </View>
            </View>
          </ModalContent>
        </BottomModal>
      </View>
    </View>
  );
};

export default QuranSurs;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    // paddingBottom: 100,
  },
  image: {
    width: "100%",
    height: 250,
  },
  cardDetails: {
    height: "100%",
    padding: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  name: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 28,
  },
  des: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 16,
  },
  bottomModal: {
    backgroundColor: "#5D2559",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  modalTitle: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 18,
    flexDirection: "column",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#5D2559",
    height: 'auto',
    paddingHorizontal: 12,
  },
  modalContentView: {
    width: '100%',
    paddingVertical: 12,
    flexDirection: "column",
    gap: 16,
    backgroundColor: "#5D2559"
  },
  readMode: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 18,
  },
  readModeButtons: {
    flexDirection: "row",
    gap: 20,
  },
  translation: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
