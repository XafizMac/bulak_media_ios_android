import { ActivityIndicator, StyleSheet, Text, View, Image, Button } from "react-native";
import Clock from "react-live-clock";
import PrayerTimes from "../../../api";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Mosque from "../../../assets/backgrouds/bgmosque.png";
export default function CurrentTime() {
  const { loadTimes } = PrayerTimes();
  const [todayTime, setTodayTime] = useState({});
  const [time, setTime] = useState([]);
  const [currentPrayer, setCurrentPrayer] = useState(<ActivityIndicator size={"small"} />);
  const prayerItem = todayTime?.timings;

  useEffect(() => {
    setTimeout(checkStorage, 500);
    defineCurrentPrayerTime();
  }, []);

  async function checkStorage() {
    const timesOnStorage = await AsyncStorage.getItem("times");
    if (timesOnStorage === null) {
      await loadTimes();
      await defineCurrentPrayerTime();
    } else {
      const parsedTimes = await JSON.parse(timesOnStorage);
      setTime(parsedTimes);
      findTodayTimes(parsedTimes);
    }
  }


  useEffect(() => {
    // Обновляем текущую молитву каждые 3 секунды
    const interval = setInterval(() => {
      defineCurrentPrayerTime();
    }, 3000);

    return () => clearInterval(interval)
  }, [todayTime])

  const findTodayTimes = useCallback(
    (times) => {
      const date = new Date();
      const today = date.getDate();
      const filteredTodayTime = times.find(
        (t) => t?.date?.gregorian?.day == today,
      );
      setTodayTime(filteredTodayTime);
    },
    [time],
  );

  const defineCurrentPrayerTime = async () => {

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const getMinutes = (hours, minutes) => {
      return Number(hours) * 60 + Number(minutes);
    };

    const prayerSchedule = [
      { name: 'Фаджр', time: getMinutes(prayerItem?.Fajr.substr(0, 2), prayerItem?.Fajr.substr(3, 2)) },
      { name: 'Восход', time: getMinutes(prayerItem?.Sunrise.substr(0, 2), prayerItem?.Sunrise.substr(3, 2)) },
      { name: 'Зухр', time: getMinutes(prayerItem?.Dhuhr.substr(0, 2), prayerItem?.Dhuhr.substr(3, 2)) },
      { name: 'Аср', time: getMinutes(prayerItem?.Asr.substr(0, 2), prayerItem?.Asr.substr(3, 2)) },
      { name: 'Магриб', time: getMinutes(prayerItem?.Maghrib.substr(0, 2), prayerItem?.Maghrib.substr(3, 2)) },
      { name: 'Иша', time: getMinutes(prayerItem?.Isha.substr(0, 2), prayerItem?.Isha.substr(3, 2)) },
    ];

    prayerSchedule.push({ name: 'Следующий фаджр', time: getMinutes(prayerItem?.Fajr.substr(0, 2), prayerItem?.Fajr.substr(3, 2)) + 1040 });


    // Определение текущую молитву
    for (let i = 0; i < prayerSchedule.length - 1; i++) {
      if (currentTime >= prayerSchedule[i].time && currentTime < prayerSchedule[i + 1].time) {
        setCurrentPrayer(prayerSchedule[i].name);
        break;
      };
    }
  }

  return (
    <View style={styles.main}>
      <Image style={styles.bgmosque} source={Mosque} alt="" />
      <Text style={styles.prayerName}>{currentPrayer}</Text>
      <Clock
        style={styles.prayerTime}
        format={"HH:mm"}
        ticking={true}
        element={Text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 35,
  },
  bgmosque: {
    position: "absolute",
    right: 0,
    left: 150,
    bottom: -70,
    zIndex: 0,
    width: 450,
    height: 300,
    objectFit: "scale-down"
  },
  prayerName: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 20,
  },
  prayerTime: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 50,
  },
  leftTime: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 20,
  },
});
