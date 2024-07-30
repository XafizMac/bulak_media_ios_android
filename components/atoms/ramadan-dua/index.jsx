import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import background from "../../../assets/backgrouds/ramadan.jpg";
import suhur from "../../../assets/icons/suhur.png";
import iftar from "../../../assets/icons/iftar.png";
import data from "../../../data/time.json";
import moment from "moment";
export default function Dua() {
  const [fajrTime, setFajrTime] = useState("");
  const [ishaTime, setIshaTime] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    loadTimes();
  }, [moment().date()]);

  const loadTimes = async () => {
    try {
      const todayDate = data.find((item) => {
        const currentDate = moment().format("DD-MM-YYYY");
        if (item.date.gregorian.date === currentDate) return item.timings;
      });
      const todayPrayerTime = todayDate.timings;
      if (todayDate) {
        setFajrTime(todayPrayerTime.Fajr.substring(0, 5));
        setIshaTime(todayPrayerTime.Maghrib.substring(0, 5));
        const now = moment();
        const iftarMoment = moment(todayPrayerTime.Maghrib, "HH:mm");
        const diff = iftarMoment.diff(now);
        setTimeLeft(moment.utc(diff).format("HH:mm:ss"));
        setInterval(() => {
          const updatedDiff = iftarMoment.diff(moment());
          setTimeLeft(moment.utc(updatedDiff).format("HH:mm:ss"));
        }, 1000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePress = (value) => {
    navigation.push("duaFor", {
      data: value,
    });
  };

  return (
    <View style={styles.block}>
      <ImageBackground source={background} resizeMode="cover">
        <View style={styles.blurPage}>
          <View style={styles.timeLeft}>
            <Text style={styles.title}>До ифтара:</Text>
            <Text style={styles.time}>{timeLeft}</Text>
          </View>
          <View style={styles.duas}>
            <Pressable onPress={() => handlePress(1)}>
              <View style={styles.dua}>
                <Text style={styles.duaTitle}>Сухур</Text>
                <Text style={styles.duaTime}>{fajrTime}</Text>
                <Image style={{ width: 80, height: 80 }} source={suhur} />
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress(2)}>
              <View style={styles.dua}>
                <Text style={styles.duaTitle}>Ифтар</Text>
                <Text style={styles.duaTime}>{ishaTime}</Text>
                <Image style={{ width: 80, height: 80 }} source={iftar} />
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
    height: 250,
    backgroundColor: "#5D2559",
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(113, 43, 108, .6)",
  },
  blurPage: {
    width: "100%",
    height: "100%",
    padding: 12,
    backgroundColor: "rgba(70, 17, 81, .8)",
    flexDirection: "column",
    gap: 16,
  },
  timeLeft: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Bold",
  },
  time: {
    color: "white",
    fontSize: 26,
    fontFamily: "Bold",
  },
  location: {
    color: "white",
    fontFamily: "Medium",
  },
  duas: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dua: {
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
  },
  duaTitle: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 16,
  },
  duaTime: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 26,
  },
});
