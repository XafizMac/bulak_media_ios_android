import { StyleSheet, Text, View } from "react-native";
import Clock from "react-live-clock";
import PrayerTimes from "../../../api";
import { useLayoutEffect } from "react";

export default function CurrentTime() {

    const { datas, loading } = PrayerTimes();
    const loadTimes = PrayerTimes();

    useLayoutEffect(() => {
        loadTimes();
    }, [])

    return (
        <View style={styles.main}>
            <Text style={styles.prayerName}>ШАМ</Text>
            <Clock
                style={styles.prayerTime}
                format={"HH:mm"}
                ticking={true}
                element={Text}
            />
            <Text style={styles.leftTime}>-01:14:30</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: .4,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 35,
    },
    prayerName: {
        color: "#fff",
        fontFamily: "Bold",
        fontSize: 20,
    },
    prayerTime: {
        color: "#fff",
        fontFamily: "Bold",
        fontSize: 50
    },
    leftTime: {
        color: "#fff",
        fontFamily: "Medium",
        fontSize: 20,
    }
})
