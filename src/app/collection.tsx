import { PrimaryButton } from "@/components/PrimaryButton";
import { QuestionListItem } from "@/components/QuestionListItem";
import { colors } from "@/constants/colors";
import { questions } from "@/data/questions";
import {
  FAVORITES_STORAGE_KEY,
  PRACTICE_STORAGE_KEY,
  loadMarkedQuestionIds,
} from "@/storage/markedQuestions";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type VisibleList = "favorites" | "practice";

export default function CollectionScreen() {
  const router = useRouter();
  const [visibleList, setVisibleList] = useState<VisibleList>("favorites");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [practiceIds, setPracticeIds] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function loadStoredMarks() {
        const storedFavoriteIds = await loadMarkedQuestionIds(
          FAVORITES_STORAGE_KEY,
        );
        const storedPracticeIds =
          await loadMarkedQuestionIds(PRACTICE_STORAGE_KEY);
        setFavoriteIds(storedFavoriteIds);
        setPracticeIds(storedPracticeIds);
      }

      loadStoredMarks();
    }, []),
  );

  let visibleIds: string[];

  if (visibleList === "favorites") {
    visibleIds = favoriteIds;
  } else {
    visibleIds = practiceIds;
  }

  const visibleQuestions = questions.filter((question) =>
    visibleIds.includes(question.id),
  );

  function practiceVisibleQuestions() {
    router.push({
      pathname: "/quiz",
      params: { questionIds: visibleIds.join(",") },
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <FlatList
        data={visibleQuestions}
        keyExtractor={(question) => question.id}
        renderItem={({ item }) => <QuestionListItem question={item} />}
        contentContainerStyle={styles.listContent}
        contentInsetAdjustmentBehavior="automatic"
        ListHeaderComponent={
          <View style={styles.switchRow}>
            <Pressable
              style={[
                styles.switchButton,
                visibleList === "favorites" ? styles.switchButtonActive : null,
              ]}
              onPress={() => setVisibleList("favorites")}
              accessibilityRole="button"
              accessibilityState={{ selected: visibleList === "favorites" }}
            >
              <Text
                style={[
                  styles.switchLabel,
                  visibleList === "favorites" ? styles.switchLabelActive : null,
                ]}
              >
                Favoriten ({favoriteIds.length})
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.switchButton,
                visibleList === "practice" ? styles.switchButtonActive : null,
              ]}
              onPress={() => setVisibleList("practice")}
              accessibilityRole="button"
              accessibilityState={{ selected: visibleList === "practice" }}
            >
              <Text
                style={[
                  styles.switchLabel,
                  visibleList === "practice" ? styles.switchLabelActive : null,
                ]}
              >
                Nochmal üben ({practiceIds.length})
              </Text>
            </Pressable>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Hier ist noch nichts. Markiere Fragen im Quiz.
          </Text>
        }
      />

      {visibleQuestions.length > 0 ? (
        <View style={styles.footer}>
          <PrimaryButton
            label="Diese Fragen üben"
            onPress={practiceVisibleQuestions}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: 24,
    gap: 12,
  },
  switchRow: {
    flexDirection: "row",
    padding: 4,
    marginBottom: 8,
    borderRadius: 14,
    backgroundColor: colors.primaryLight,
    gap: 4,
  },
  switchButton: {
    flex: 1,
    minHeight: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  switchButtonActive: {
    backgroundColor: colors.background,
  },
  switchLabel: {
    fontSize: 15,
    color: colors.text,
  },
  switchLabelActive: {
    fontWeight: "600",
    color: colors.primary,
  },
  emptyText: {
    marginTop: 24,
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    color: colors.textLight,
  },
  footer: {
    padding: 24,
    paddingTop: 12,
  },
});
