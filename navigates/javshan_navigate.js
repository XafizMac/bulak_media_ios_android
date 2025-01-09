import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Javshan } from "../components/pages/javshan/Javshan";
import { Bab } from "../components/pages/javshan/Bab/Bab";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function JavshanNavigation(){
    const navigation = useNavigation();
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="JavshanNavigation"
                component={Javshan}
                options={{
                    headerTitle: "ЖАВШАН",
                    headerStyle: { backgroundColor: "#2E0A30" },
                    headerTitleStyle: { fontFamily: "Bold" },
                    headerTintColor: "white",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back-outline" style={{ marginLeft: -14}} size={30} color="white" />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="Bab"
                component={Bab}
                options={{
                    headerTitle: "ЖАВШАН",
                    headerStyle: { backgroundColor: "#2E0A30" },
                    headerTitleStyle: { fontFamily: "Bold" },
                    headerTintColor: "white",
                    headerTitleAlign: "left",
                    headerBackTitleVisible: false
                }}
            />
        </Stack.Navigator>
    )
}