import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PrimaryCard({ image, title, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    {image}
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    card: {
        gap: 8,
        alignItems: 'center'
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