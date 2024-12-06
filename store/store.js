import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create((set) => ({
  folder: [
    { name: "Мои любимые", ayat: [] }
  ],

  addFolder: async (name) => { 
    try {
      const currentFolders = await AsyncStorage.getItem("folder");
      const parsedFolders = JSON.parse(currentFolders) || folder;

      const newFolder = { name: name, ayat: [] };
      const updatedFolders = [...parsedFolders, newFolder];

      await AsyncStorage.setItem("folder", JSON.stringify(updatedFolders));
      set({ folder: updatedFolders })
    }
    catch (e) {
      console.log("Error adding folder", e);
    }
  },
  getFolder: async () => {
    try {
      const storedFolders = await AsyncStorage.getItem("folder");
      const parsedFolders = JSON.parse(storedFolders) || folder;
      set({ folder: parsedFolders });
    }
    catch (e) {
      console.log("Error loading folders", e);
    }
  },

  deleteFolder: async (name) => {
    try {
      const currentFolders = await AsyncStorage.getItem("folder");
      const parsedFolders = JSON.parse(currentFolders) || [];
      if (parsedFolders.length == 1) {
        return false;
      }

      const updatedFolders = parsedFolders.filter((folder) => folder.name !== name);

      await AsyncStorage.setItem("folder", JSON.stringify(updatedFolders));
      set({ folder: updatedFolders });
    }
    catch (e) { }
  },

  addAyat: async (folderName, ayat) => {

  },
  deleteAyat: async (folderName) => {

  }

}));

export default useStore;