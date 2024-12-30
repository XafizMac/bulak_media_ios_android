import { ScrollView, StyleSheet, Text, View } from "react-native";
import useStore from "../../../store/store";
import { useEffect, useState } from "react";
import Ayah from "../../atoms/ayah";

export const AyatFolder = ({ route }) => {
    const folder = useStore((state) => state.folder)
    const getFolder = useStore((state) => state.getFolder);
    const [currentFolder, setCurrentFolder] = useState([]);
    const { folderName } = route.params;

    useEffect(() => {
        defineFolder();
    }, []);

    const defineFolder = async () => {
        try {
            await getFolder();
            const filteredFolder = folder.filter(
                (folder) => folder.name === folderName,
            );
            setCurrentFolder(filteredFolder);
        } catch (error) { }
    }

    const deleteAyatFromFolder = async (arabicText) => {
        try {
            console.log(currentFolder);
        
            const updatedFolder = currentFolder[0].ayat.filter((ayat) => ayat.arabicText !== arabicText);
            // console.log(updatedFolder);
            // setCurrentFolder(updatedFolder);
        }
        catch (error) { }

    }




    return (
        <View style={styles.main}>
            <ScrollView>
                <View style={styles.container}>
                    {currentFolder.length > 0 ? currentFolder.map((item, index) => (
                        <View style={styles.content} key={index}>
                            <Text style={styles.name}>{item.name}</Text>
                            {item.ayat.map((ayat, index) => {
                                return (
                                    <Ayah
                                        key={index}
                                        index={ayat.index}
                                        info={ayat.info}
                                        arabicText={ayat.arabicText}
                                        meaningText={ayat.meaningText}
                                        deleting={false}
                                        onDelete={() => deleteAyatFromFolder(ayat.arabicText)}
                                    />
                                )
                            }
                            )}
                        </View>
                    )) :
                        <Text>
                            Пустой
                        </Text>
                    }
                </View>
            </ScrollView>
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
    content: {
        display: "flex",
        flexDirection: "column",
        gap: 30
    },
    name: {
        color: "white",
        fontFamily: "Bold",
        fontSize: 28,
    },
});
