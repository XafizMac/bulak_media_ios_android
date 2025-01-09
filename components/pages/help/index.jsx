import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../atoms/titles/title/Title';
import * as Linking from 'expo-linking';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
export default function Help() {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Title title={"Помощь"} />
                <Text style={styles.subtitle}>Если вы заметили ошибки или у вас есть предложения, свяжитесь с нами:</Text>
                <View style={{ gap: 10 }}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/+996779079279')}>
                        <View style={styles.link}>
                            <FontAwesome name="whatsapp" size={24} color="#F2BB4A" />
                            <Text style={styles.link}>Whats App</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://t.me/@hafizbey_official')}>
                        <View style={styles.link}>
                            <FontAwesome5 name="telegram-plane" size={24} color="#F2BB4A" />
                            <Text style={{ color: "#F2BB4A", fontFamily: "Medium", fontSize: 18 }}>Telegram</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>Или отправьте нам свой отзыв на почту:</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:bulakmediaofficial@gmail.com')}>
                    <View style={styles.link}>
                        <Entypo name="mail" size={24} color="#F2BB4A" />
                        <Text style={{ color: "#F2BB4A", fontFamily: "Medium", fontSize: 18 }}>bulakmediaofficial@gmail.com</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.subtitle}>Мы ценим ваше мнение и всегда стремимся улучшить приложение!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        backgroundColor: "#2E0A30",
        height: "100%",
    },
    container: {
        paddingHorizontal: 12,
        paddingTop: 30,
        gap: 16
    },
    subtitle: {
        color: "white",
        fontFamily: "Medium",
        fontSize: 16,
    },
    link: {
        color: "#F2BB4A",
        fontFamily: "Medium",
        fontSize: 18,
        gap: 10,
        flexDirection: "row",
        alignItems: 'center'
    }
});

