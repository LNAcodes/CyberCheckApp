import { colors } from "@/constants/colors";
import type { OptionLetter, Question } from "@/types/quiz";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type QuizCardProps = {
  question: Question;
  onNextQuestion: () => void;
};

export function QuizCard({ question, onNextQuestion }: QuizCardProps) {
  // Teil 1: Gedächtnis und abgeleiteter Wert
  const [selectedOption, setSelectedOption] = useState<OptionLetter | null>(
    null,
  );
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const isAnswerCorrect = selectedOption === question.correctOption;

  // Teil 2: Helfer-Funktionen
  function getOptionStyle(letter: OptionLetter) {
    const isThisOptionSelected = selectedOption === letter;
    const isThisOptionCorrect = question.correctOption === letter;

    if (isRevealed && isThisOptionCorrect) {
      return styles.optionCorrect;
    }
    if (isRevealed && isThisOptionSelected) {
      return styles.optionWrong;
    }
    if (isThisOptionSelected) {
      return styles.optionSelected;
    }
    return null;
  }

  function getOptionLabel(letter: OptionLetter) {
    const isThisOptionSelected = selectedOption === letter;
    const isThisOptionCorrect = question.correctOption === letter;

    if (isRevealed && isThisOptionCorrect) {
      return "✓ Richtige Antwort";
    }
    if (isRevealed && isThisOptionSelected) {
      return "○ Deine Antwort. Das stimmt nicht.";
    }
    if (isThisOptionSelected) {
      return "Ausgewählt";
    }
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question.questionText}</Text>
      <Pressable
        style={[styles.option, getOptionStyle("A")]}
        onPress={() => setSelectedOption("A")}
        disabled={isRevealed}
        accessibilityRole="button"
      >
        <Text style={styles.optionText}>A: {question.optionA}</Text>
        {getOptionLabel("A") ? (
          <Text style={styles.optionLabel}>{getOptionLabel("A")}</Text>
        ) : null}
      </Pressable>

      <Pressable
        style={[styles.option, getOptionStyle("B")]}
        onPress={() => setSelectedOption("B")}
        disabled={isRevealed}
        accessibilityRole="button"
      >
        <Text style={styles.optionText}>B: {question.optionB}</Text>
        {getOptionLabel("B") ? (
          <Text style={styles.optionLabel}>{getOptionLabel("B")}</Text>
        ) : null}
      </Pressable>

      <Pressable
        style={[styles.option, getOptionStyle("C")]}
        onPress={() => setSelectedOption("C")}
        disabled={isRevealed}
        accessibilityRole="button"
      >
        <Text style={styles.optionText}>C: {question.optionC}</Text>
        {getOptionLabel("C") ? (
          <Text style={styles.optionLabel}>{getOptionLabel("C")}</Text>
        ) : null}
      </Pressable>

      {/* Teil 4: Button "Antwort prüfen" */}
      {isRevealed ? null : (
        <Pressable
          style={[
            styles.checkButton,
            selectedOption === null ? styles.checkButtonDisabled : null,
          ]}
          onPress={() => setIsRevealed(true)}
          disabled={selectedOption === null}
          accessibilityRole="button"
        >
          <Text style={styles.checkButtonText}>Antwort prüfen</Text>
        </Pressable>
      )}

      {/* Teil 5: Erklärungskasten */}
      {isRevealed ? (
        <View style={styles.explanationBox}>
          <Text style={styles.resultText}>
            {isAnswerCorrect ? "Richtig!" : "Nicht ganz."}
          </Text>
          <Text style={styles.explanationHeading}>Warum?</Text>
          <Text style={styles.explanationText}>{question.explanation}</Text>

          <Pressable
            style={styles.checkButton}
            onPress={onNextQuestion}
            accessibilityRole="button"
          >
            <Text style={styles.checkButtonText}>Nächste Frage</Text>
          </Pressable>
        </View>
      ) : null}
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
    borderColor: colors.optionBorder,
    borderRadius: 12,
    justifyContent: "center",
  },
  optionSelected: {
    borderWidth: 3,
    borderColor: colors.accent,
    backgroundColor: colors.accentLight,
  },
  optionCorrect: {
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: colors.correctBackground,
  },
  optionWrong: {
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: colors.neutralBorder,
    backgroundColor: colors.neutralBackground,
  },
  optionText: {
    fontSize: 16,
  },
  optionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    marginTop: 4,
  },
  checkButton: {
    minHeight: 56,
    marginTop: 24,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkButtonDisabled: {
    backgroundColor: colors.primaryBorder,
  },
  checkButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textOnPrimary,
  },
  explanationBox: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.optionBorder,
    backgroundColor: colors.background,
  },
  resultText: {
    fontSize: 17,
    fontWeight: "600",
  },
  explanationHeading: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },
  explanationText: {
    fontSize: 15,
    marginTop: 4,
    lineHeight: 22,
  },
});
