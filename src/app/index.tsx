import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  function startQuiz() {
    router.push("/quiz");
  }

  function openSets() {
    router.push("/sets");
  }

  function openCollection() {
    router.push("/collection");
  }

  function openScan() {
    router.push("/scan");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title} accessibilityRole="header">
          Cyber<Text style={styles.titleAccent}>Check</Text>
        </Text>
        <Text style={styles.subtitle}>
          Das Quiz zu deinen digitalen Rechten
        </Text>

        <View style={styles.buttonGroup}>
          <PrimaryButton label="Quiz starten" onPress={startQuiz} />
          <SecondaryButton label="Fragenset wählen" onPress={openSets} />
          <SecondaryButton label="Fragenset scannen" onPress={openScan} />
          <SecondaryButton label="Meine Sammlung" onPress={openCollection} />
        </View>

        <View style={styles.privacyNote}>
          <Text style={styles.privacyNoteText}>
            Kein Konto nötig. Deine Antworten bleiben auf deinem Gerät.
          </Text>
        </View>
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
  titleAccent: {
    color: colors.accent,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: colors.textLight,
  },
  buttonGroup: {
    marginTop: 48,
    gap: 12,
  },
  privacyNote: {
    marginTop: "auto",
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.primaryLight,
  },
  privacyNoteText: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.text,
  },
});
