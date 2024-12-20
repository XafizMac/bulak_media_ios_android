import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function HomeCard() {

    const navigation = useNavigation()

    const data = [
        { title: 'Шахада', url: "Shahada", img: require("../../../assets/img/Shahada.png") },
        { title: 'Суры', url: "Surnavigation", img: require("../../../assets/img/Sur.png") },
        { title: 'Тасбихат', url: "Tasbihat", img: require("../../../assets/img/Tasbih.png") },
        { title: 'Молитвы', url: "Prayer", img: require("../../../assets/img/Dua.png") },
        { title: 'Жавшан', url: "Javshan", img: require("../../../assets/img/Javshan.png") },
        { title: 'Тафрижия', url: "Tafrijia", img: require("../../../assets/img/Tafrijia.png") },
    ] 

    const handlePress = (url) => {
        navigation.navigate(url);
    }

    return (
        <View style={styles.cards}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                <View style={styles.cards}>
                    {data.map((card, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => handlePress(card.url)}>
                                <View style={styles.card}>
                                    <View style={styles.cardContent}>
                                        <Image style={styles.img} source={card.img} alt="" />
                                    </View>
                                    <Text style={styles.title}>{card.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll: {
        overflow: "visible",
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
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
        borderRadius: 12
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