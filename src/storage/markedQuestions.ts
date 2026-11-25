import AsyncStorage from "@react-native-async-storage/async-storage";

export const FAVORITES_STORAGE_KEY = "cybercheck:favorites";
export const PRACTICE_STORAGE_KEY = "cybercheck:practice";

export async function loadMarkedQuestionIds(
  storageKey: string,
): Promise<string[]> {
  try {
    const storedText = await AsyncStorage.getItem(storageKey);

    if (storedText === null) {
      return [];
    }

    const parsedValue = JSON.parse(storedText);

    if (Array.isArray(parsedValue)) {
      return parsedValue;
    }

    return [];
  } catch (error) {
    console.error("Markierungen konnten nicht geladen werden:", error);
    return [];
  }
}

export async function saveMarkedQuestionIds(
  storageKey: string,
  questionIds: string[],
): Promise<void> {
  try {
    const textToStore = JSON.stringify(questionIds);
    await AsyncStorage.setItem(storageKey, textToStore);
  } catch (error) {
    console.error("Markierungen konnten nicht gespeichert werden:", error);
  }
}
