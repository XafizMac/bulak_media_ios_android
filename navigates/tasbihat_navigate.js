import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Tasbihat } from "../components/pages/tasbihat/Tasbihat"
import { Fajr } from "../components/pages/fajr/Fajr"
import { Zuhr } from "../components/pages/zuhr/Zuhr"
import { Asr } from "../components/pages/asr/Asr"
import { Magrib } from "../components/pages/magrib/Magrib"
import { Isha } from "../components/pages/isha/Isha"

const Stack = createNativeStackNavigator()
export default function TasbihatNavigation() {

    const screens = [
        { name: "Fajr", title: "ФАДЖР", component: Fajr },
        { name: "Zuhr", title: "ЗУХР", component: Zuhr },
        { name: "Asr", title: "АСР", component: Asr },
        { name: "Magrib", title: "МАГРИБ", component: Magrib },
        { name: "Isha", title: "ИША", component: Isha }
    ]

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="tasbihat"
                component={Tasbihat}
                options={{
                    headerTitle: "ТАСБИХАТ",
                    headerStyle: { backgroundColor: "#2E0A30" },
                    headerTitleStyle: { fontFamily: "Bold" },
                    headerTintColor: "white",
                    headerTitleAlign: "left",
                    // headerShown: false
                }}
            />
            {screens.map((item, index) => (
                <Stack.Screen
                    key={index}
                    name={item.name}
                    title={item.title}
                    component={item.component}
                    options={{
                        presentation: "modal",
                        headerTitle: item.title,
                        headerStyle: { backgroundColor: "#2E0A30" },
                        headerTitleStyle: { fontFamily: "Bold" },
                        headerTintColor: "white",
                        headerTitleAlign: "left",
                    }}
                />
            ))}
        </Stack.Navigator>
    )
}