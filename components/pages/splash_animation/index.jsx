import LottieView from "lottie-react-native"

import { Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "red", width: 100, height: 100 }}>
            <LottieView style={{ flex: 1 }} source={"../../../assets/animations/animation.json"} autoPlay loop />
            <Text>Hello</Text>
        </View>
    )
}
