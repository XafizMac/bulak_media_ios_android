import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import Clock from "react-live-clock";
import PrayerTimes from "../../../api";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTimeDifference } from "../../../utils/timeDifference";
import { Svg, Path } from "react-native-svg";
import Mosque from "../../../assets/backgrouds/bgmosque.png";

export default function CurrentTime() {
  const { loadTimes } = PrayerTimes();
  const [time, setTime] = useState([]);
  const [todayTime, setTodayTime] = useState({});
  const [loading, setLoading] = useState(true);
  const [difference, setDifference] = useState();

  useEffect(() => {
    async function checkStorage() {
      const timesOnStorage = await AsyncStorage.getItem("times");
      if (timesOnStorage == null) {
        await loadTimes();
      } else {
        const parsedTimes = await JSON.parse(timesOnStorage);
        setTime(parsedTimes);
        defineTodayTimes(parsedTimes);
        setLoading(false);
      }
      defineCurrentPrayerTime();
    }
    setTimeout(checkStorage, 1000);
  }, []);

  return (
    <View style={styles.main}>
      <Image style={styles.bgmosque} source={Mosque} alt="" />
      <Text style={styles.prayerName}>ШАМ</Text>
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
