import type { Question } from "@/types/quiz";
import { StyleSheet, Text, View } from "react-native";

type QuizCardProps = {
  question: Question;
};

export function QuizCard({ question }: QuizCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question.questionText}</Text>
      <Text style={styles.option}>A: {question.optionA}</Text>
      <Text style={styles.option}>B: {question.optionB}</Text>
      <Text style={styles.option}>C: {question.optionC}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 32,
    padding: 16,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
  },
  option: {
    fontSize: 16,
    marginTop: 12,
  },
});
