import { Slot, Stack } from "expo-router";
import { View } from "tamagui";

export default function Onboarding() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" pb="$8">
      <Slot />
    </View>
  );
}
