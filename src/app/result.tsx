import { colors } from "@/constants/colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResultScreen() {
  const router = useRouter();
  const { score, total, setId } = useLocalSearchParams<{
    score: string;
    total: string;
    setId?: string;
  }>();
  // Hinweis: Params kommen immer als Text an, auch wenn man Zahlen schickt.

  const scoreAsNumber = Number(score);
  const totalAsNumber = Number(total);
  // Hinweis: Welche eingebaute Funktion macht aus "4" die Zahl 4?

  function playAgain() {
    if (setId) {
      router.replace({ pathname: "/quiz", params: { setId: setId } });
    } else {
      router.replace("/quiz");
    }
  }

  function goToStart() {
    router.replace("/");
  }
  // Hinweis: Wie heißen die Adressen für quiz.tsx und index.tsx?
  // Erinnerung: index.tsx ist die Startadresse, also nur ein Schrägstrich.

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title} accessibilityRole="header">
          Geschafft!
        </Text>

        <View style={styles.scoreBox}>
          <Text style={styles.scoreNumber}>
            {scoreAsNumber} von {totalAsNumber}
          </Text>
          <Text style={styles.scoreText}>
            Fragen hast du richtig beantwortet.
          </Text>
        </View>

        <Pressable
          style={styles.primaryButton}
          onPress={playAgain}
          accessibilityRole="button"
        >
          <Text style={styles.primaryButtonText}>Nochmal spielen</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={goToStart}
          accessibilityRole="button"
        >
          <Text style={styles.secondaryButtonText}>Zur Startseite</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.primary,
  },
  scoreBox: {
    marginTop: 24,
    padding: 24,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  scoreNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.textOnPrimary,
  },
  scoreText: {
    fontSize: 17,
    marginTop: 8,
    color: colors.textOnPrimary,
  },
  primaryButton: {
    minHeight: 56,
    marginTop: 40,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textOnPrimary,
  },
  secondaryButton: {
    minHeight: 56,
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.primary,
  },
});
