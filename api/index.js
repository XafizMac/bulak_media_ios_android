import { useEffect, useState } from "react";
import useLocation from "./location";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PrayerTimes() {
  const { location, loading, errorMessage } = useLocation();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  useEffect(() => {
    loadTimes();
  }, [location]);

  const loadTimes = async () => {
    try {
      if (location !== null) {
        const response = await fetch(
          `https://api.aladhan.com/v1/calendarByAddress/${year}/${month}?address=${location?.city}%&method=4`
        );
        const responseData = await response.json();
        await AsyncStorage.setItem("times", JSON.stringify(responseData?.data));
      }
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
    }
  };
  return { loading, errorMessage }, loadTimes;
}

export default PrayerTimes;



/*

(✔️) 1. Get permission from User(expo-location)
(✔️) 2. Get location (long, lat)
(✔️) 3. Reverse geocode API
(✔️)4. Get prayer times for place

*/