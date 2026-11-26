import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "CyberCheck" }}
      />
      <Stack.Screen name="sets" options={{ title: "Fragensets" }} />
      <Stack.Screen name="quiz" options={{ title: "Quiz" }} />
      <Stack.Screen name="collection" options={{ title: "Meine Sammlung" }} />
      <Stack.Screen name="scan" options={{ title: "Scannen" }} />
      <Stack.Screen name="result" options={{ headerShown: false }} />
    </Stack>
  );
}
