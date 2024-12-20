import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { ModalPortal } from "react-native-modals";
import { LayoutNavigate } from "./navigates/layout";

export default function App() {
  const [fonts] = useFonts({
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Bold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    ArabicMedium: require("./assets/fonts/Arabic-Medium.ttf"),
  });

  
  if (!fonts)
    return (
      <View style={styles.loadingPage}>
        <ActivityIndicator size={40} />
      </View>
    );

  return (
    <NavigationContainer>
      <View style={styles.App}>
        <StatusBar barStyle="light-content" />
        <LayoutNavigate />
        <ModalPortal />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  App: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    padding: 12,
  },
  loadingPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E0A30",
  },
});
