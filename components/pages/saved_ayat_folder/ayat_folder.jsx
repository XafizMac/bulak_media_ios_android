import { StyleSheet, Text, View } from "react-native";
import useStore from "../../../store/store";
import { useEffect, useState } from "react";
import AyahButton from "../../atoms/quranAyahBtn";

export const AyatFolder = ({ route }) => {
    const folder = useStore((state) => state.folder);
    const [currentFolder, setCurrentFolder] = useState([]);
    const { folderName } = route.params;

    const defineFolder = () => {
        const filteredFolder = folder.filter(
            (folder) => folder.name === folderName,
        );
        setCurrentFolder(filteredFolder);
    }

    useEffect(() => {
        defineFolder();
    }, []);

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                {currentFolder.length ? currentFolder.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.name}>{item.name}</Text>
                        {item.ayat.map((ayat, index) => (
                            <AyahButton name={ayat} />
                        ))}
                    </View>
                )) :
                    <Text>
                        Пустой
                    </Text>
                }
            </View>
        </View>
    );
};

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
