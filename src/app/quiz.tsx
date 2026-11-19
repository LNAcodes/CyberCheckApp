import { QuizCard } from "@/components/QuizCard";
import { questions } from "@/data/questions";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Quizscreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = questions[currentQuestionIndex];

  function goToNextQuestion() {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion}
          onNextQuestion={goToNextQuestion}
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
