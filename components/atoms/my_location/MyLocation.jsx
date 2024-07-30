import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import GetPermission from "../../../api/location";
import { useEffect, useState } from "react";
import useLocation from "../../../api/location";

export default function MyLocation() {
    const { location, loading } = useLocation();
    const [today, setToday] = useState("");
    const date = new Date();
    const day = date.getDay();
    const data = date.getDate();


    useEffect(() => {
        undefineDay();
    }, [day])

    const undefineDay = () => {
        const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        const dayOfWeek = daysOfWeek[day - 1];
        setToday(dayOfWeek);
    }

    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View style={styles.date}>
                    <Text style={styles.datetext}>{today}, {data} </Text>
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