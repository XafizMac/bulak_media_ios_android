import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
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
export default function Times() {
  const [fajrTime, setFajrTime] = useState("");
  const [sunriseTime, setSunriseTime] = useState("");
  const [zuhrTime, setZuhrTime] = useState("");
  const [asrTime, setAsrTime] = useState("");
  const [magribTime, setMagribTime] = useState("");
  const [ishaTime, setIshaTime] = useState("");
  const currentTimeHour = +moment().hours();
  const currentTimeMinutes = +moment().minutes();
  const [muted, setMuted] = useState(false);
  const {datas} = PrayerTimes();
  const loadTimes = PrayerTimes();

  useEffect(() => {
    async function FetchData() {
      loadTimess();
    }
    FetchData();
  }, [moment().date(), currentTimeMinutes]);

  const dataOfTimes = [
    {
      name: "Фаджр",
      hours: +fajrTime.substr(0, 2),
      minutes: +fajrTime.substr(3, 5),
    },
    {
      name: "Восход",
      hours: +sunriseTime.substr(0, 2),
      minutes: +sunriseTime.substr(3, 5),
    },
    {
      name: "Зухр",
      hours: +zuhrTime.substr(0, 2),
      minutes: +zuhrTime.substr(3, 5),
    },
    {
      name: "Аср",
      hours: +asrTime.substr(0, 2),
      minutes: +asrTime.substr(3, 5),
    },
    {
      name: "Магриб",
      hours: +magribTime.substr(0, 2),
      minutes: +magribTime.substr(3, 5),
    },
    {
      name: "Иша",
      hours: +ishaTime.substr(0, 2),
      minutes: +ishaTime.substr(3, 5),
    },
  ];

  const loadTimess = () => {
    try {
      // Фильтр по датам
      const todayDate = data.find((item) => {
        const currentDate = moment().format("DD-MM-YYYY");
        if (item.date.gregorian.date === currentDate) return item.timings;
      });
      const todayPrayerTime = todayDate.timings;
      if (todayDate) {
        setFajrTime(todayPrayerTime.Fajr.substr(0, 5));
        setSunriseTime(todayPrayerTime.Sunrise.substr(0, 5));
        setZuhrTime(todayPrayerTime.Dhuhr.substr(0, 5));
        setAsrTime(todayPrayerTime.Asr.substr(0, 5));
        setMagribTime(todayPrayerTime.Maghrib.substr(0, 5));
        setIshaTime(todayPrayerTime.Isha.substr(0, 5));
      } else {
        console.log("Ошибка");
      }
    } catch (e) {
      console.log("Error getting times", e);
    }
  };

  const activeImages = [
    fajrActive,
    activeSunrise,
    zuhrActive,
    asrActive,
    magribActive,
    ishaActive,
  ];
  const inactiveImages = [
    fajrNoneActive,
    sunriseNoneActive,
    zuhrNoneActive,
    asrNoneActive,
    magribNoneActive,
    ishaNoneActive,
  ];

  

  const getPrayerImage = (prayerIndex) => {
    const prayerTime = dataOfTimes[prayerIndex];
    const prayerHours = prayerTime.hours;
    const prayerMinutes = prayerTime.minutes;

    // Проверяем, прошло ли время данного намаза
    const prayerTimeHasPassed =
      currentTimeHour > prayerHours ||
      (currentTimeHour === prayerHours && currentTimeMinutes >= prayerMinutes);

    // Если текущий намаз последний намаз дня, вернем активное изображение для него, если его время прошло
    if (
      prayerIndex === dataOfTimes.length - 1 &&
      currentTimeHour < dataOfTimes[0].hours
    ) {
      return activeImages[prayerIndex];
    }

    // Проверяем, наступило ли время следующего намаза
    const nextPrayerTimeHasCome =
      prayerIndex < dataOfTimes.length - 1 &&
      (currentTimeHour > dataOfTimes[prayerIndex + 1].hours ||
        (currentTimeHour === dataOfTimes[prayerIndex + 1].hours &&
          currentTimeMinutes >= dataOfTimes[prayerIndex + 1].minutes));

    // Если время данного намаза уже прошло, но время следующего намаза еще не наступило, вернем активное изображение для данного намаза
    if (prayerTimeHasPassed && !nextPrayerTimeHasCome) {
      return activeImages[prayerIndex];
    }

    // Если время данного намаза прошло, и время следующего намаза наступило, или это не текущий намаз, возвращаем неактивное изображение
    return prayerTimeHasPassed
      ? inactiveImages[prayerIndex]
      : inactiveImages[prayerIndex];
  };

  return (
    <View style={styles.block}>
      <View style={styles.timesList}>
        <View style={styles.time}>
          <Image style={styles.img} source={getPrayerImage(0)} />
          <Text style={styles.title}>Фаджр</Text>
          <Text style={styles.dispazone}>06:00</Text>
        </View>
        <View style={styles.time}>
          <Image style={styles.img} source={getPrayerImage(1)} />
          <Text style={styles.title}>Восход</Text>
          <Text style={styles.dispazone}>07:34</Text>
        </View>
        <View style={styles.time}>
          <Image style={styles.img} source={getPrayerImage(2)} />
          <Text style={styles.title}>Зухр</Text>
          <Text style={styles.dispazone}>13:14</Text>
        </View>
        <View style={styles.time}>
          <Image style={styles.img} source={getPrayerImage(3)} />
          <Text style={styles.title}>Аср</Text>
          <Text style={styles.dispazone}>17:09</Text>
        </View>
        <View style={styles.time}>
          <Image style={styles.img} source={getPrayerImage(4)} />
          <Text style={styles.title}>Магриб</Text>
          <Text style={styles.dispazone}>18:57</Text>
        </View>
        <View style={styles.time}>
          <Image
            style={{ width: 30, height: 30, objectFit: "scale-down" }}
            source={getPrayerImage(5)}
          />
          <Text style={styles.title}>Иша</Text>
          <Text style={styles.dispazone}>20:28</Text>
        </View>
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
    gap: 5
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
