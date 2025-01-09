import { StyleSheet, View } from "react-native";
import Times from "../../atoms/prayer-times/Times";
import HomeCard from "../../atoms/home-cards/HomeCard";
import PrimaryCard from "../../atoms/card/primary_card";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
export default function BottomContent() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('help');
  };

  return (
    <View style={styles.content}>
      <Times />
      <HomeCard />
      <PrimaryCard
        title="Вопросы"
        image={<Entypo name="help" size={24} color="#F2BB4A" />}
        handlePress={handlePress}
      />
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
    alignItems: "flex-start",
    gap: 20,
  },
});
