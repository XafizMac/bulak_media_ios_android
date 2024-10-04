import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Sur } from "../components/pages/sur/Sur";
import SurSample from "../components/molecules/sur-sample/SurSample";
import Al_Fil from "../components/pages/SurScreens/Al_Fil";
import Kuraysh from "../components/pages/SurScreens/Kuraysh";
import Al_Maun from "../components/pages/SurScreens/Al_Maun";
import Al_Kavsar from "../components/pages/SurScreens/Al_Kavsar";
import Al_Kafirun from "../components/pages/SurScreens/Al_Kafirun";
import Al_Nasr from "../components/pages/SurScreens/An_Nasr";
import Al_Masad from "../components/pages/SurScreens/Al_Masad";
import Al_Ihlas from "../components/pages/SurScreens/Al_Ihlas";
import Al_Fatiha from "../components/pages/SurScreens/Al_Fatiha";
import Al_Asr from "../components/pages/SurScreens/Al_Asr";
import AlFalak from "../components/pages/SurScreens/Al_Falak";
import AnNas from "../components/pages/SurScreens/AnNas";
import Al_Humaza from "../components/pages/SurScreens/Al_Humaza";


const Stack = createNativeStackNavigator();
export default function SurNavigation() {

    const screenOptions = (name) => {
        return {
            headerTitle: name,
            headerStyle: { backgroundColor: "#2E0A30" },
            headerTitleStyle: { fontFamily: "Bold" },
            headerTintColor: "white",
            headerTitleAlign: "left",
        }
    }

    const screens = [
        { name: "al-Fatiha", title: "СУРЫ", component: Al_Fatiha },
        { name: "al-Asr", title: "СУРЫ", component: Al_Asr },
        { name: "al-Falak", title: "СУРЫ", component: AlFalak },
        { name: "anNas", title: "СУРЫ", component: AnNas },
        { name: "alHumaza", title: "СУРЫ", component: Al_Humaza },
        { name: "al-Fil", title: "СУРЫ", component: Al_Fil },
        { name: "Kuraysh", title: "СУРЫ", component: Kuraysh },
        { name: "al-Maun", title: "СУРЫ", component: Al_Maun },
        { name: "al-Kavsar", title: "СУРЫ", component: Al_Kavsar },
        { name: "al-Kafirun", title: "СУРЫ", component: Al_Kafirun },
        { name: "an-Nasr", title: "СУРЫ", component: Al_Nasr },
        { name: "al-Masad", title: "СУРЫ", component: Al_Masad },
        { name: "al-Ihlas", title: "СУРЫ", component: Al_Ihlas },
    ]

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Surs"
                component={Sur}
                options={{
                    headerShown: false
                }}
            />
            {screens.map((item, index) => (
                <Stack.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={{
                        headerShown: false
                    }}
                />
            ))}
        </Stack.Navigator>
    )
}