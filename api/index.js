import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useLocation from "./location";


function PrayerTimes() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)
  const { location } = useLocation();

  const loadTimes = async () => {
    try {
      // const cachedData = await AsyncStorage.getItem("times");
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const response = await fetch(
        `https://api.aladhan.com/v1/calendarByAddress/${year}/${month}?address=${location.city}%&method=3`
      );
      const data = await response.json();
      const newDatas = data.data.map((item) => item.timings);
      setDatas(newDatas);
      await AsyncStorage.setItem("times", JSON.stringify(datas));
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
    }
    finally {
      setLoading(false);
    }
  };
  return { loading, datas }, loadTimes;
}

export default PrayerTimes;



/* 

(✔️) 1. Get permission from User(expo-location)
(✔️) 2. Get location (long, lat)
(✔️) 3. Reverse geocode API
4. Get prayer times for place

*/