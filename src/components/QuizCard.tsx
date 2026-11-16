import type { OptionLetter, Question } from "@/types/quiz";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type QuizCardProps = {
  question: Question;
};

export function QuizCard({ question }: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<OptionLetter | null>(
    null,
  );
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question.questionText}</Text>
      <Pressable
        style={[
          styles.option,
          selectedOption === "A" ? styles.optionSelected : null,
        ]}
        onPress={() => setSelectedOption("A")}
      >
        <Text style={styles.optionText}>A: {question.optionA}</Text>
        {selectedOption === "A" ? (
          <Text style={styles.selectedLabel}>Ausgewählt</Text>
        ) : null}
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selectedOption === "B" ? styles.optionSelected : null,
        ]}
        onPress={() => setSelectedOption("B")}
      >
        <Text style={styles.optionText}>B: {question.optionB}</Text>
        {selectedOption === "B" ? (
          <Text style={styles.selectedLabel}>Ausgewählt</Text>
        ) : null}
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selectedOption === "C" ? styles.optionSelected : null,
        ]}
        onPress={() => setSelectedOption("C")}
      >
        <Text style={styles.optionText}>C: {question.optionC}</Text>
        {selectedOption === "C" ? (
          <Text style={styles.selectedLabel}>Ausgewählt</Text>
        ) : null}
      </Pressable>
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
    minHeight: 56,
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#B8C1D6",
    borderRadius: 12,
    justifyContent: "center",
  },
  optionSelected: {
    borderWidth: 3,
    borderColor: "#1F4FD8",
    backgroundColor: "#E6ECFA",
  },
  optionText: {
    fontSize: 16,
  },
  selectedLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#163BA6",
    marginTop: 4,
  },
});
