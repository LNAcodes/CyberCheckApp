import { colors } from "@/constants/colors";
import { getSetTitle } from "@/data/questionSets";
import type { Question } from "@/types/quiz";
import { StyleSheet, Text, View } from "react-native";

type QuestionListItemProps = {
  question: Question;
};

export function QuestionListItem({ question }: QuestionListItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.setTitle}>{getSetTitle(question.setId)}</Text>
      <Text style={styles.questionText}>{question.questionText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.optionBorder,
    backgroundColor: colors.background,
  },
  setTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
  questionText: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
    color: colors.text,
  },
});
