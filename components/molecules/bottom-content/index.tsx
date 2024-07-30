import {
  StyleSheet,
  View,
} from "react-native";
import Times from "../../atoms/prayer-times/Times";
import HomeCard from "../../atoms/home-cards/HomeCard";

export default function BottomContent() {
  return (
    <View style={styles.content}>
          <Times />
          <HomeCard />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#461151",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    gap: 20,
  },
});
