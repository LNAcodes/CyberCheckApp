import { colors } from "@/constants/colors";
import { questionSets } from "@/data/questionSets";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetsScreen() {
  const router = useRouter();

  function startSet(setId: string) {
    router.push({
      pathname: "/quiz",
      params: { setId: setId },
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
      >
        {questionSets.map((questionSet) => (
          <Pressable
            key={questionSet.id}
            style={({ pressed }) => [
              styles.setItem,
              pressed ? styles.setItemPressed : null,
            ]}
            onPress={() => startSet(questionSet.id)}
            accessibilityRole="button"
          >
            <Text style={styles.setTitle}>{questionSet.title}</Text>
            <Text style={styles.setDescription}>{questionSet.description}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
    gap: 12,
  },
  setItem: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.optionBorder,
    backgroundColor: colors.background,
  },
  setItemPressed: {
    borderColor: colors.accent,
    backgroundColor: colors.accentLight,
  },
  setTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },
  setDescription: {
    fontSize: 15,
    marginTop: 4,
    color: colors.textLight,
  },
});
