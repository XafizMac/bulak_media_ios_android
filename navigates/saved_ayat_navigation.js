import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SavedAyat } from "../components/pages/saved/saved_ayats";
import { AyatFolder } from "../components/pages/saved_ayat_folder/ayat_folder";

const Stack = createNativeStackNavigator();

export const SavedNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="savedhomepage"
                component={SavedAyat}
            />
            <Stack.Screen
                name="ayatfolder"
                component={AyatFolder}
                options={{
                    headerTitle: "Закладка",
                    headerStyle: { backgroundColor: "#2E0A30" },
                    headerTitleStyle: { fontFamily: "Bold" },
                    headerTintColor: "white",
                    headerTitleAlign: "left",
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}