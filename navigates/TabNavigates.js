import { Text, View, Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Импорт иконки
import { Foundation } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from "../components/pages/ramadan_homepage/Home";
import { SavedNavigation } from "./saved_ayat_navigation";
import Quran from "./QuranNavigation";

const Tab = createBottomTabNavigator();
const OS = Platform.OS;
const windowWidth = Dimensions.get("window").width;

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    left: (windowWidth - (windowWidth * 65 / 100)) / 3,
    bottom: 20,
    right: 0,
    height: 80,
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(70, 17, 81, 1)",
    paddingTop: OS === "ios" ? 25 : 0,
    borderWidth: 0,
    borderTopColor: "rgba(70, 17, 81, 1)",
    borderRadius: 100,
    marginHorizontal: "5%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: .4,
    shadowRadius: 20,
    elevation: 10
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
                  focused ? {
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#F8C04B",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                  } : {

                  }}
              >
                <Text>
                  <Foundation name="home" size={30} color={focused ? "#F2BB4A" : "white"} />
                </Text>
              </View>
            );
          }
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
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#F8C04B",
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 20,
                    }
                    : {
                      alignItems: "center",
                      justifyContent: "center",
                    }
                }
              >
                <Text>
                  <FontAwesome5 name="book-open" size={25} color={focused ? "#F2BB4A" : "white"} />
                </Text>
              </View>
            );
          },
        }}
        name="Quran"
      />
      <Tab.Screen
        component={SavedNavigation}
        name="Saved"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#F8C04B",
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 20,
                    }
                    : {
                      alignItems: "center",
                      justifyContent: "center",
                    }
                }
              >
                <Text>
                  {/* <FontAwesome5 name="bookmark" size={24} color={focused ? "#F2BB4A" : "white"} /> */}
                  <FontAwesome name="bookmark" size={25} color={focused ? "#F2BB4A" : "white"} />
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}


{/* <Tab.Screen
  component={Compass}
  name="Compass"
  options={{
    tabBarIcon: ({ focused }) => {
      return (
        <View
          style={
            focused
              ? {
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#F8C04B",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
              }
              : {
                alignItems: "center",
                justifyContent: "center",
              }
          }
        >
          <Text>
            <Fontisto name="compass" size={26} color={focused ? "#F2BB4A" : "white"} />
          </Text>
        </View>
      );
    },
  }}
/> */}
