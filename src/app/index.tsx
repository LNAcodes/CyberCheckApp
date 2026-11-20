import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  function startQuiz() {
    router.push("/quiz");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title} accessibilityRole="header">
          CyberCheck
        </Text>
        <Text style={styles.subtitle}>
          Das Quiz zu deinen digitalen Rechten
        </Text>
        <Pressable
          style={styles.startButton}
          onPress={startQuiz}
          accessibilityRole="button"
        >
          <Text style={styles.startButtonText}>Quiz starten</Text>
        </Pressable>
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
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: colors.textLight,
  },
  startButton: {
    minHeight: 56,
    marginTop: 48,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textOnPrimary,
  },
});
