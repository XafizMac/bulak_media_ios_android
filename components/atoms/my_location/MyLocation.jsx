import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import useLocation from "../../../api/location";

export default function MyLocation() {
    const { location, loading } = useLocation();
    const [today, setToday] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");
    const date = new Date();
    const day = date.getDay();
    const data = date.getDate();
    const month = date.getMonth();

    useEffect(() => {
        async function undefineMoments() {
            undefineDay()
            undefineMonth();
        }
        undefineMoments();
    }, [day, month])

    const undefineDay = () => {
        const daysOfWeek = ["Воскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const dayOfWeek = daysOfWeek[day];
        setToday(dayOfWeek);
    }
    const undefineMonth = () => {
        const monthsOfYear = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
        const monthOfYear = monthsOfYear[month];
        setCurrentMonth(monthOfYear);
    }

    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View style={styles.date}>
                    <Text style={styles.datetext}>{today}, {"\n"} {data}-{currentMonth} </Text>
                </View>
                <View style={styles.place}>
                    {loading && <ActivityIndicator style={styles.indicator} size={"small"} />}
                    <Text style={styles.location}>{location?.city} {"\n"} {location?.country == "Киргизия" && "Кыргызстан"}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        paddingHorizontal: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    date: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    datetext: {
        color: "white",
        fontFamily: "Medium",
        fontSize: 14,
        textAlign: "left",
    },
    place: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    location: {
        color: "white",
        fontFamily: "Medium",
        fontSize: 14,
        textAlign: "right"
    },
    indicator: {
        width: "10%",
    }
})