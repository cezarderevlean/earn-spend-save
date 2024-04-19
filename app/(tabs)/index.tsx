import { Link } from "expo-router";
import { View } from "tamagui";
import { Button, ButtonNext, JourneyStep } from "@/components";

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="center" pt="$6">
      <Link href="/modal" asChild>
        <ButtonNext />
      </Link>
      <Button mt="$6">Copaci</Button>
      <JourneyStep mt="$6" />
    </View>
  );
}
