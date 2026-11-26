import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { colors } from "@/constants/colors";
import { useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScanScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();

  function chooseFromList() {
    router.replace("/sets");
  }

  function openPhoneSettings() {
    Linking.openSettings();
  }

  if (permission === null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.bodyText}>Einen Moment ...</Text>
      </SafeAreaView>
    );
  }

  if (permission.granted) {
    return (
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <ScrollView
          contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text style={styles.bodyText}>Kamera bereit</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const isPermissionBlocked = permission.canAskAgain === false;

  if (isPermissionBlocked) {
    return (
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <ScrollView
          contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text style={styles.title} accessibilityRole="header">
            Die Kamera ist ausgeschaltet
          </Text>
          <Text style={styles.bodyText}>
            Du hast der App den Zugriff auf die Kamera nicht erlaubt. Das ist
            völlig in Ordnung. Du kannst das Fragenset einfach aus der Liste
            wählen.
          </Text>
          <Text style={styles.bodyText}>
            Wenn du doch scannen möchtest, kannst du die Kamera in den
            Einstellungen deines Handys erlauben.
          </Text>

          <View style={styles.buttonGroup}>
            <PrimaryButton
              label="Fragenset aus der Liste wählen"
              onPress={chooseFromList}
            />
            <SecondaryButton
              label="Einstellungen öffnen"
              onPress={openPhoneSettings}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text style={styles.title} accessibilityRole="header">
          Fragenset scannen
        </Text>
        <Text style={styles.bodyText}>
          Dafür braucht CyberCheck kurz deine Kamera. Das solltest du vorher
          wissen:
        </Text>

        <View style={styles.pointList}>
          <View style={styles.point}>
            <Text style={styles.pointSymbol}>✓</Text>
            <Text style={styles.pointText}>
              Die Kamera liest nur den QR-Code.
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.pointSymbol}>✓</Text>
            <Text style={styles.pointText}>
              Es wird kein Bild gespeichert oder verschickt.
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.pointSymbol}>✓</Text>
            <Text style={styles.pointText}>
              Du kannst die Erlaubnis jederzeit in den Einstellungen
              zurücknehmen.
            </Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <PrimaryButton
            label="Kamera erlauben und scannen"
            onPress={requestPermission}
          />
          <SecondaryButton
            label="Lieber aus der Liste wählen"
            onPress={chooseFromList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },
  bodyText: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 24,
    color: colors.text,
  },
  pointList: {
    marginTop: 20,
    gap: 14,
  },
  point: {
    flexDirection: "row",
    gap: 12,
  },
  pointSymbol: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.primary,
  },
  pointText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  buttonGroup: {
    marginTop: 32,
    gap: 12,
  },
});
