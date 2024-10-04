import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Vibration,
} from "react-native";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Audio } from "expo-av";
import audioUrl from "../../../../assets/audio/beat.wav";
export default function Counter() {
  const sound = useRef(new Audio.Sound());
  const [number, setNumber] = useState(0);
  const height = useSharedValue(200);


  const loadAudio = async () => {
    await sound.current.loadAsync(audioUrl, {}, false);
  }

  const playAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (!result.isPlaying) {
          await sound.current.stopAsync();
          await sound.current.playAsync();
        }
      }
    }
    catch (err) {
      console.error("Error playing sound", err);
    }
  }

  // Size
  const handleMaximize = useCallback(() => {
    if (height.value >= 600) {
      height.value = 600;
    } else {
      height.value = withSpring(height.value + 100);
    }
  }, [height]);

  const handleMinimize = useCallback(() => {
    if (height.value <= 200) {
      height.value = 200;
    } else {
      height.value = withSpring(height.value - 100);
    }
  }, [height]);

  // ! Count & Tab
  const handleCount = () => {
    setNumber((prev) => prev + 1);
    Vibration.vibrate(50);
    saveNumber(number + 1);
    playAudio();
  };

  // Zero
  const handleZero = () => {
    setNumber(0);
    saveNumber(0);
    Vibration.vibrate(70);
  };
  useEffect(() => {
    loadSavedNumbers();
  }, []);

  useEffect(() => {
    loadAudio();

    return () => {
      sound.current.unloadAsync();
    };
  }, [])

  const loadSavedNumbers = async () => {
    try {
      const savedNumber = await AsyncStorage.getItem("savedNumber");
      if (savedNumber !== null) {
        setNumber(parseInt(savedNumber, 10));
      }
    } catch (error) {
      console.error("Error loading saved number", error);
    }
  };
  const saveNumber = async (value) => {
    try {
      await AsyncStorage.setItem("savedNumber", value.toString());
    } catch (error) {
      console.error("Error saving number", error);
    }
  };

  return (
    <Animated.View style={[styles.counter, { height: height }]}>
      <View style={styles.counter_row}>
        <View style={styles.size_btns}>
          <Pressable onPress={handleMaximize}>
            <MaterialIcons name="keyboard-arrow-up" size={40} color="white" />
          </Pressable>
          {height.value >= 200 && (
            <Pressable onPress={handleMinimize}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={40}
                color="white"
              />
            </Pressable>
          )}
        </View>
        <Pressable onPress={handleZero}>
          <AntDesign name="close" size={25} color="white" />
        </Pressable>
      </View>
      <Pressable onPress={handleCount}>
        <View style={styles.counter_area}>
          <Text style={styles.number}>{number}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  counter: {
    backgroundColor: "#461151",
    position: "absolute",
    width: "100%",
    bottom: 0,
    right: 0,
    padding: 10,
    paddingBottom: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  counter_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter_area: {
    paddingBottom: 30,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 40,
    color: "white",
    // fontFamily: "Medium",
  },
  size_btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
