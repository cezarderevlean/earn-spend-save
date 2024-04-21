import { Stack } from "expo-router";

export default function Onboarding() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationTypeForReplace: "push",
      }}
    />
  );
}
