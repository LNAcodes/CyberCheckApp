import { colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type MarkButtonsProps = {
  isFavorite: boolean;
  isForPractice: boolean;
  onToggleFavorite: () => void;
  onTogglePractice: () => void;
};

export function MarkButtons({
  isFavorite,
  isForPractice,
  onToggleFavorite,
  onTogglePractice,
}: MarkButtonsProps) {
  return (
    <View style={styles.row}>
      <Pressable
        style={[styles.button, isFavorite ? styles.buttonActive : null]}
        onPress={onToggleFavorite}
        accessibilityRole="button"
        accessibilityState={{ selected: isFavorite }}
      >
        <Text style={[styles.label, isFavorite ? styles.labelActive : null]}>
          {isFavorite ? "★ Favorit" : "☆ Favorit"}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.button, isForPractice ? styles.buttonActive : null]}
        onPress={onTogglePractice}
        accessibilityRole="button"
        accessibilityState={{ selected: isForPractice }}
      >
        <Text style={[styles.label, isForPractice ? styles.labelActive : null]}>
          {isForPractice ? "✓ Nochmal üben" : "Nochmal üben"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  button: {
    flex: 1,
    minHeight: 48,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: colors.optionBorder,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    borderWidth: 2,
    borderColor: colors.accent,
    backgroundColor: colors.accentLight,
  },
  label: {
    fontSize: 15,
    color: colors.text,
  },
  labelActive: {
    fontWeight: "600",
  },
});
