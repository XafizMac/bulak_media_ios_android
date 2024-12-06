import TabNavigates from "./TabNavigates";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuranSurs from "../components/pages/quranSurs";
import MenuNavigate from "./MenuNavigate";
import { Shahada } from "../components/pages/shahada/Shahada";
import { Sur } from "../components/pages/sur/Sur";
import SurNavigation from "./sur_navigator";
import TasbihatNavigation from "./tasbihat_navigate";
import Prayer from "../components/pages/dua/Prayer";
import JavshanNavigation from "./javshan_navigate";
import Tafrijia from "../components/pages/tafrijia/Tafrijia";
import { SavedNavigation } from "./saved_ayat_navigation";

const Stack = createNativeStackNavigator();
export const LayoutNavigate = () => {
  
  const screenOptions = (name) => {
    return {
      headerTitle: name,
      headerStyle: { backgroundColor: "#2E0A30" },
      headerTitleStyle: { fontFamily: "Bold" },
      headerTintColor: "white",
      headerTitleAlign: "left",
      headerBackTitleVisible: false,
    }
  }

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
        options={() => screenOptions("КУРАНИ КАРИМ")}
      />
      <Stack.Screen
        component={SavedNavigation}
        name="Saved"
      />
      <Stack.Screen
        component={Shahada}
        name="Shahada"
        options={() => screenOptions("ШАХАДА")}
      />
      <Stack.Screen
        component={SurNavigation}
        name="Surnavigation"
        options={screenOptions("СУРЫ")}
      />
      <Stack.Screen
        component={TasbihatNavigation}
        name="Tasbihat"
        options={{
          headerShown: true,
          headerBackTitleVisible: true
        }}
      />
      <Stack.Screen
        component={Prayer}
        name="Prayer"
        options={screenOptions("МОЛИТВЫ")}
      />
      <Stack.Screen
        component={JavshanNavigation}
        name="Javshan"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={Tafrijia}
        name="Tafrijia"
        options={screenOptions("ТАФРИЖИЯ")}
      />
      <Stack.Screen
        name="saved"
        component={SavedNavigation}
        options={{
          headerTitle: "Закладка",
          headerStyle: { backgroundColor: "#2E0A30" },
          headerTitleStyle: { fontFamily: "Bold" },
          headerTintColor: "white",
          headerTitleAlign: "left",
          // headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  );
};
