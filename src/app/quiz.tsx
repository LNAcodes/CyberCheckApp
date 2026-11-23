import { ProgressBar } from "@/components/ProgressBar";
import { QuizCard } from "@/components/QuizCard";
import { questions } from "@/data/questions";
import type { Question } from "@/types/quiz";
import { shuffleQuestions } from "@/utils/shuffleQuestions";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Quizscreen() {
  const router = useRouter();
  const [roundQuestions] = useState<Question[]>(() =>
    shuffleQuestions(questions),
  );
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const currentQuestion = roundQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === roundQuestions.length - 1;

  function handleAnswerChecked(isAnswerCorrect: boolean) {
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  }

  function goToNextQuestion() {
    if (isLastQuestion) {
      router.replace({
        pathname: "/result",
        params: { score: score, total: roundQuestions.length },
      });
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
          onNextQuestion={goToNextQuestion}
          onAnswerChecked={handleAnswerChecked}
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
});
