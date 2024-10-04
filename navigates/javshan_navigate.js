import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Javshan } from "../components/pages/javshan/Javshan";
import { Bab } from "../components/pages/javshan/Bab/Bab";

const Stack = createNativeStackNavigator();

export default function JavshanNavigation(){
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
                    headerTitleAlign: "left",
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