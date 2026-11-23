import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "CyberCheck" }}
      />
      <Stack.Screen name="quiz" options={{ title: "Quiz" }} />
      <Stack.Screen name="result" options={{ headerShown: false }} />
    </Stack>
  );
}
