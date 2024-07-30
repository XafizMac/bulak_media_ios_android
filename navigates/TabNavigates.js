import { Text, View, Image, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigate from "./MenuNavigate";
// Импорт иконки
import QuranLogo from "../assets/icons/quran.png";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import Home from "../components/pages/ramadan_homepage/Home";
import Quran from "../components/pages/quran/Quran";
import { Menu } from "../components/pages/home/Menu";
import { Compass } from "../components/pages/compass";

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width;
const currentWidth = windowWidth >= 390;
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  headerTransparent: true,
  tabBarStyle: {
    backfaceVisibility: true,
    left: 0,
    bottom: currentWidth ? 0 : -7,
    bottom: 0,
    right: 0,
    height: currentWidth ? 100 : 95,
    width: "100%",
    backgroundColor: "rgba(70, 17, 81, 1)",
    paddingTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -30,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    borderWidth: 0,
    borderTopColor: "#5D2559",
    tabBarHideOnKeyboard: true
  },
};

export default function TabNavigates() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused && {
                    backgroundColor: "#74277A",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                  }
                }
              >
                <Text>
                  <Foundation name="home" size={30} color="white" />
                </Text>
              </View>
            );
          },
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        component={Quran}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                      width: 70,
                      height: 70,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 100,
                      shadowColor: "#F8C04B",
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 20,
                    }
                    : {
                      width: 70,
                      height: 70,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 100,
                    }
                }
              >
                <Text>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "scale-down",
                    }}
                    source={QuranLogo}
                  />
                </Text>
              </View>
            );
          },
        }}
        name="Quran"
      />
      <Tab.Screen
        component={Compass}
        name="Compass"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused && {
                    backgroundColor: "#74277A",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                  }
                }
              >
                <Text>
                  <Fontisto name="compass" size={30} color="white" />
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
