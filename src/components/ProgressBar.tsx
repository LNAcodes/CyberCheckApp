import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type ProgressBarProps = {
  currentNumber: number;
  totalNumber: number;
};

export function ProgressBar({ currentNumber, totalNumber }: ProgressBarProps) {
  const filledWidthInPercent = (currentNumber / totalNumber) * 100;

  return (
    <View>
      <Text style={styles.label}>
        Frage {currentNumber} von {totalNumber}
      </Text>

      <View
        style={styles.track}
        accessibilityLabel={`Fortschritt: ${currentNumber} von ${totalNumber} Fragen`}
      >
        <View style={[styles.fill, { width: `${filledWidthInPercent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textLight,
  },
  track: {
    height: 8,
    marginTop: 8,
    borderRadius: 4,
    backgroundColor: colors.optionBorder,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
