import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function HomeCard() {

    const navigation = useNavigation()

    const data = [
        { title: 'Шахада', url: "home", img: require("../../../assets/img/Shahada.png") },
        { title: 'Тасбихат', url: "home", img: require("../../../assets/img/Tasbih.png") },
        { title: 'Молитвы', url: "home", img: require("../../../assets/img/Dua.png") },
        { title: 'Жавшан', url: "home", img: require("../../../assets/img/Javshan.png") },
        { title: 'Тафрижия', url: "home", img: require("../../../assets/img/Tafrijia.png") },
    ]

    const handlePress = (url) => {
        navigation.navigate("Quran");
    }

    return (
        <View style={styles.cards}>
            {data.map((card, index) => {
                return (
                    <Pressable key={index} onPress={() => handlePress(card.url)}>
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <Image style={styles.img} source={card.img} alt="" />
                            </View>
                            <Text style={styles.title}>{card.title}</Text>
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    cards: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        gap: 8,
        alignItems: "center",
    },
    cardContent: {
        backgroundColor: "#76237F",
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    img: {
        width: 25,
        height: 25,
        objectFit: 'scale-down'
    },
    title: {
        color: "#F2BB4A",
        fontSize: 11,
        fontFamily: "Bold"
    }
})