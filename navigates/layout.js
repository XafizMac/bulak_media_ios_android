import TabNavigates from "./TabNavigates";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuranSurs from "../components/pages/quranSurs";
import MenuNavigate from "./MenuNavigate";

const Stack = createNativeStackNavigator();
export const LayoutNavigate = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={TabNavigates}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={QuranSurs}
        name="Surah"
        options={() => ({
          headerTitle: "КУРАНИ КАРИМ",
          headerStyle: { backgroundColor: "#2E0A30" },
          headerTitleStyle: { fontFamily: "Bold" },
          headerTintColor: "white",
          headerTitleAlign: "left",
        })}
      />
      <Stack.Screen
        component={MenuNavigate}
        name="menu"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
