import { ProgressBar } from "@/components/ProgressBar";
import { QuizCard } from "@/components/QuizCard";
import { colors } from "@/constants/colors";
import { questions } from "@/data/questions";
import {
  FAVORITES_STORAGE_KEY,
  PRACTICE_STORAGE_KEY,
  loadMarkedQuestionIds,
  saveMarkedQuestionIds,
} from "@/storage/markedQuestions";
import type { Question } from "@/types/quiz";
import { shuffleQuestions } from "@/utils/shuffleQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Quizscreen() {
  const router = useRouter();
  const { setId } = useLocalSearchParams<{ setId?: string }>();

  const [roundQuestions] = useState<Question[]>(() => {
    if (setId) {
      const questionsOfThisSet = questions.filter(
        (question) => question.setId === setId,
      );
      return shuffleQuestions(questionsOfThisSet);
    }
    return shuffleQuestions(questions);
  });

  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [practiceIds, setPracticeIds] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.clear();
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
  }, []);

  if (roundQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.emptyText}>
          Für dieses Fragenset gibt es noch keine Fragen.
        </Text>
      </SafeAreaView>
    );
  }

  const currentQuestion = roundQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === roundQuestions.length - 1;

  function toggleFavorite(questionId: string) {
    let updatedFavoriteIds: string[];

    if (favoriteIds.includes(questionId)) {
      updatedFavoriteIds = favoriteIds.filter(
        (favoriteId) => favoriteId !== questionId,
      );
    } else {
      updatedFavoriteIds = [...favoriteIds, questionId];
    }

    setFavoriteIds(updatedFavoriteIds);
    saveMarkedQuestionIds(FAVORITES_STORAGE_KEY, updatedFavoriteIds);
  }

  function togglePractice(questionId: string) {
    let updatedPracticeIds: string[];

    if (practiceIds.includes(questionId)) {
      updatedPracticeIds = practiceIds.filter(
        (practiceId) => practiceId !== questionId,
      );
    } else {
      updatedPracticeIds = [...practiceIds, questionId];
    }

    setPracticeIds(updatedPracticeIds);
    saveMarkedQuestionIds(PRACTICE_STORAGE_KEY, updatedPracticeIds);
  }

  function handleAnswerChecked(isAnswerCorrect: boolean) {
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  }

  function goToNextQuestion() {
    if (isLastQuestion) {
      if (setId) {
        router.replace({
          pathname: "/result",
          params: {
            score: score,
            total: roundQuestions.length,
            setId: setId,
          },
        });
      } else {
        router.replace({
          pathname: "/result",
          params: { score: score, total: roundQuestions.length },
        });
      }
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
      >
        <ProgressBar
          currentNumber={currentQuestionIndex + 1}
          totalNumber={roundQuestions.length}
        />
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion}
          isLastQuestion={isLastQuestion}
          isFavorite={favoriteIds.includes(currentQuestion.id)}
          isForPractice={practiceIds.includes(currentQuestion.id)}
          onNextQuestion={goToNextQuestion}
          onAnswerChecked={handleAnswerChecked}
          onToggleFavorite={() => toggleFavorite(currentQuestion.id)}
          onTogglePractice={() => togglePractice(currentQuestion.id)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  emptyText: {
    padding: 24,
    fontSize: 17,
    color: colors.text,
  },
});
