import React, { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, Pressable } from "react-native"
import useLocation from "../../../api/location";
import { Magnetometer } from "expo-sensors";
import { Svg, Path } from "react-native-svg";
import compass from "../../../assets/backgrouds/compass.png";
import arrow from "../../../assets/backgrouds/direction.png";
import { Modal } from "../../molecules/modals/Modal";
import AntDesign from '@expo/vector-icons/AntDesign';
import { PrimaryButton } from "../../atoms/buttons/primary/primary_button";

const KAABA_LATITUDE = 21.4225;
const KAABA_LONGITUDE = 39.8262;

const calculateQiblaDirection = (latitude, longitude) => {
    const kaabaLatRad = KAABA_LATITUDE * (Math.PI / 180);
    const kaabaLongRad = KAABA_LONGITUDE * (Math.PI / 180);
    const userLatRad = latitude * (Math.PI / 180);
    const userLongRad = longitude * (Math.PI / 180);

    const deltaLong = kaabaLongRad - userLongRad;
    const x = Math.cos(kaabaLatRad) * Math.sin(deltaLong);
    const y = Math.cos(userLatRad) * Math.sin(kaabaLatRad) - Math.sin(userLatRad) * Math.cos(kaabaLatRad) * Math.cos(deltaLong);
    let qiblaAngle = Math.atan2(x, y) * (180 / Math.PI);
    qiblaAngle = (qiblaAngle + 360) % 360;
    return qiblaAngle;
};


export const Compass = () => {
    const { coords } = useLocation();
    const [heading, setHeading] = useState(0);
    const [qiblaDirection, setQiblaDirection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (coords !== null) {
            setLoading(false);
            const qiblaDir = calculateQiblaDirection(coords?.latitude, coords?.longitude);
            setQiblaDirection(qiblaDir);
        }
    }, [coords]);

    useEffect(() => {
        const subscription = Magnetometer.addListener((data) => {
            let angle = Math.atan(data.y, data.x) * (180 / Math.PI);
            setHeading(Math.round(angle >= 0 ? angle : angle + 360));
        });
        return () => subscription && subscription.remove();
    }, []);
    const qiblaHeading = (qiblaDirection !== null) ? (qiblaDirection - heading + 360) % 360 : 0;

    return (
        <View style={styles.main}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable onPress={() => setModalVisible(true)}>
                            <AntDesign name="infocirlceo" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View style={styles.kaaba}>
                        <Svg width="40px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M18 0L0 5v29l18 2l18-2V5z" fill="#000000"></Path>
                            <Path fill="#292F33" d="M18 36l18-2V5L18 0z"></Path>
                            <Path fill="#FFD983" d="M22.454 14.507v3.407l4.229.612V15.22zm7 1.181v3.239l3.299.478v-3.161zM18 13.756v3.513l1.683.244V14.04zm18 3.036l-.539-.091v3.096l.539.078z"></Path>
                            <Path fill="#FFAC33" d="M0 16.792v3.083l.539-.078v-3.096zm16.317-2.752v3.473L18 17.269v-3.513zm-13.07 2.204v3.161l3.299-.478v-3.239zm6.07-1.024v3.306l4.229-.612v-3.407z"></Path>
                            <Path fill="#FFD983" d="M21.389 15.131v-.042c0-.421-.143-.763-.32-.763c-.177 0-.32.342-.32.763v.042c-.208.217-.355.621-.355 1.103c0 .513.162.949.393 1.152c.064.195.163.33.282.33s.218-.135.282-.33c.231-.203.393-.639.393-1.152c-.001-.482-.147-.886-.355-1.103zm6.999 1.069v-.042c0-.421-.143-.763-.32-.763c-.177 0-.32.342-.32.763v.042c-.208.217-.355.621-.355 1.103c0 .513.162.949.393 1.152c.064.195.163.33.282.33s.218-.135.282-.33c.231-.203.393-.639.393-1.152c0-.481-.147-.885-.355-1.103zm6.017 1.03v-.039c0-.393-.134-.712-.299-.712c-.165 0-.299.319-.299.712v.039c-.194.203-.331.58-.331 1.03c0 .479.151.886.367 1.076c.059.182.152.308.263.308s.203-.126.263-.308c.215-.189.367-.597.367-1.076c0-.45-.136-.827-.331-1.03z"></Path>
                            <Path fill="#FFAC33" d="M14.611 15.131v-.042c0-.421.143-.763.32-.763s.32.342.32.763v.042c.208.217.355.621.355 1.103c0 .513-.162.949-.393 1.152c-.064.195-.163.33-.282.33s-.218-.135-.282-.33c-.231-.203-.393-.639-.393-1.152c.001-.482.147-.886.355-1.103zM7.612 16.2v-.042c0-.421.143-.763.32-.763s.32.342.32.763v.042c.208.217.355.621.355 1.103c0 .513-.162.949-.393 1.152c-.064.195-.163.33-.282.33s-.218-.135-.282-.33c-.231-.203-.393-.639-.393-1.152c0-.481.147-.885.355-1.103zm-6.017 1.03v-.039c0-.393.134-.712.299-.712s.299.319.299.712v.039c.194.203.331.58.331 1.03c0 .479-.151.886-.367 1.076c-.059.182-.152.308-.263.308s-.204-.127-.264-.308c-.215-.189-.367-.597-.367-1.076c.001-.45.137-.827.332-1.03zM0 11.146v3.5l18-3.268V7.614z"></Path>
                            <Path fill="#FFD983" d="M18 7.614v3.764l18 3.268v-3.5z"></Path>
                        </Svg>
                    </View>
                    <ImageBackground source={compass} style={[styles.compassBox, { transform: [{ rotate: `${qiblaHeading.toFixed(2)}deg` }] }]}>
                        <View style={styles.arrow}>
                            <Image style={[styles.arrowImg, { transform: [{ rotate: "245deg" }, { translateY: -45 }] }]} source={arrow} />
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>

            {/* Modal */}
            <Modal isOpen={modalVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Как улучшить точность компаса?</Text>
                        <Text style={styles.subtitle}>Чтобы улучшить точность компаса повторите движение следующим образом!</Text>
                        <Image style={styles.gif} source={require("../../../assets/img/improve.gif")} />
                    </View>
                    <PrimaryButton size="large" onPress={() => setModalVisible(false)} title={"Понял"}/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#2E0A30",
        height: "100%",
    },
    container: {
        paddingHorizontal: 12,
        gap: 50,
        height: "100%",
        flexDirection: "column",
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    kaaba: {
        flexDirection: "row",
        justifyContent: "center"
    },
    compassBox: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 370,
        resizeMode: "cover",
    },
    arrow: {
        height: "100%",
        resizeMode: "contain",
    },
    arrowImg: {
        height: "100%",
        objectFit: "scale-down",
    },
    modalContent: {
        backgroundColor: "#2E0A30",
        width: "70%",
        borderRadius: 10,
        padding: 16,
        flexDirection: "column",
        gap: 15,
    },
    content: {
        flexDirection: "column",
        gap: 20,
        width: "100%",
    },
    title: {
        color: "white",
        fontFamily: "Medium",
        textAlign: "center",
        fontSize: 16,
    },
    subtitle: {
        color: "white",
        fontFamily: "Medium",
        textAlign: "center",
        fontSize: 12,
    },
    gif: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 10,
    }
})


// {loading ? <ActivityIndicator /> : <>
//     <Text>Направление на Каабу: {qiblaHeading.toFixed(2)}°</Text>
//     <Text>Ваше направление: {heading.toFixed(2)}°</Text>
// </>}