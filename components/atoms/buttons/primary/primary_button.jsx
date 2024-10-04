import { Button, Pressable, StyleSheet, Text, View } from "react-native"

export const PrimaryButton = ({ title, onPress, size }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={size == "large" ? style.largeButton : (size == "small" ? style.smallButton : style.largeButton)}>
                <Text style={style.title}>{title}</Text>
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    largeButton: {
        backgroundColor: "#461151",
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallButton: {
        backgroundColor: "#461151",
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Bold"
    }
})