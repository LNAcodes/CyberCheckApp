import { QuizCard } from "@/components/QuizCard";
import { questions } from "@/data/questions";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const firstQuestion = questions[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title} accessibilityRole="header">
          CyberCheck
        </Text>
        <Text style={styles.subtitle}>
          Das Quiz zu deinen digitalen Rechten
        </Text>
        <QuizCard question={firstQuestion} />
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },
});
