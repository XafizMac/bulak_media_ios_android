import { StyleSheet, Text, View } from "react-native";
import useStore from "../../../store/store";
import { useEffect, useState } from "react";

export const AyatFolder = ({ route }) => {
    const folder = useStore((state) => state.folder);
    const [currentFolder, setCurrentFolder] = useState([]);
    const { folderName } = route.params;

    useEffect(() => {
        const filteredFolder = folder.filter(
            (folder) => folder.name === folderName,
        );
        setCurrentFolder(filteredFolder);
    }, [folder]);

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                {currentFolder.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>Количество аятов: {item.ayat.length}</Text>
                        {item.ayat.map((ayat, index) => (
                            <Text key={index}>{ayat}</Text>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

// AyatFolder.sharedElements = (route) => {
//   const { folderName } = route.params;
//   return [{ id: `item.name` }];
// };

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2E0A30",
    },
    container: {
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    name: {
        color: "white",
        fontFamily: "Bold",
        fontSize: 28,
    },
});
