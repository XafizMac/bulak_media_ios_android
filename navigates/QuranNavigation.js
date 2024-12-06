import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuranPage from "../components/pages/quran/Quran";

const Stack = createNativeStackNavigator();

const Quran = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="quran" options={{ headerShown: false }} component={QuranPage} />
        </Stack.Navigator>
    )
}

export default Quran;