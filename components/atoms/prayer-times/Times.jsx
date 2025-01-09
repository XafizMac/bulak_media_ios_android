import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import React, {
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
// Импорт лого
import fajrActive from "../../../assets/icons/active-fajr.png";
import fajrNoneActive from "../../../assets/icons/nonActive-fajr.png";
import activeSunrise from "../../../assets/icons/active-sunrise.png";
import sunriseNoneActive from "../../../assets/icons/nonactive-sunrise.png";
import zuhrActive from "../../../assets/icons/active-zuhr.png";
import zuhrNoneActive from "../../../assets/icons/nonactive-zuhr.png";
import asrActive from "../../../assets/icons/active-asr.png";
import asrNoneActive from "../../../assets/icons/nonactive-asr.png";
import magribActive from "../../../assets/icons/active-magrib.png";
import magribNoneActive from "../../../assets/icons/nonactive-magrib.png";
import ishaActive from "../../../assets/icons/active-isha.png";
import ishaNoneActive from "../../../assets/icons/nonactive-isha.png";
// Время намаза
import moment from "moment";
import PrayerTimes from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Times() {
  const [loading, setLoading] = useState(true);
  const [todayTime, setTodayTime] = useState({});
  const [time, setTime] = useState([]);
  const { loadTimes } = PrayerTimes();
  const prayerItem = todayTime?.timings;

  useLayoutEffect(() => {
    async function checkStorage() {
      const timesOnStorage = await AsyncStorage.getItem("times");
      if (timesOnStorage == null) {
        await loadTimes();
      } else {
        const parsedTimes = await JSON.parse(timesOnStorage);
        setTime(parsedTimes);
        findTodayTimes(parsedTimes);
        setLoading(false);
      }
    }
    setTimeout(checkStorage, 1000);
  }, []);

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

  const dataOfTimes = [
    {
      name: "Фаджр",
      hours: prayerItem?.Fajr.substr(0, 2),
      minutes: prayerItem?.Fajr.substr(3, 2),
      active: true,
      activeIcon: fajrActive,
      inactiveIcon: fajrNoneActive,
    },
    {
      name: "Восход",
      hours: prayerItem?.Sunrise.substr(0, 2),
      minutes: prayerItem?.Sunrise.substr(3, 2),
      active: true,
      activeIcon: activeSunrise,
      inactiveIcon: sunriseNoneActive,
    },
    {
      name: "Зухр",
      hours: prayerItem?.Dhuhr.substr(0, 2),
      minutes: prayerItem?.Dhuhr.substr(3, 2),
      active: true,
      activeIcon: zuhrActive,
      inactiveIcon: zuhrNoneActive,
    },
    {
      name: "Аср",
      hours: prayerItem?.Asr.substr(0, 2),
      minutes: prayerItem?.Asr.substr(3, 2),
      active: true,
      activeIcon: asrActive,
      inactiveIcon: asrNoneActive,
    },
    {
      name: "Магриб",
      hours: prayerItem?.Maghrib.substr(0, 2),
      minutes: prayerItem?.Maghrib.substr(3, 2),
      active: true,
      activeIcon: magribActive,
      inactiveIcon: magribNoneActive,
    },
    {
      name: "Иша",
      hours: prayerItem?.Isha.substr(0, 2),
      minutes: prayerItem?.Isha.substr(3, 2),
      active: true,
      activeIcon: ishaActive,
      inactiveIcon: ishaNoneActive,
    },
  ];

  return (
    <View style={styles.block}>
      <View style={styles.timesList}>
        {loading ? (
          <ActivityIndicator
            style={{ width: "100%", paddingVertical: 5 }}
            size={"small"}
          />
        ) : (
          <>
            {dataOfTimes.map((item, index) => (
              <View key={index} style={styles.time}>
                <Image
                  style={{ width: 30, height: 30, objectFit: "scale-down" }}
                  source={item.active ? item.activeIcon : item.inactiveIcon}
                />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.dispazone}>
                  {item.hours}:{item.minutes}
                </Text>
              </View>
            ))}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  timesList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  title: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 14,
  },
  dispazone: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 14,
  },
  img: {
    width: 25,
    height: 25,
    objectFit: "scale-down",
  },
});
