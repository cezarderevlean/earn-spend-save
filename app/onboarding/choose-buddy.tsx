import { Buddy, ButtonBack } from "@/components";
import { BuddyProps } from "@/components/Buddy";
import { useStore } from "@/context/main";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text, View, XStack } from "tamagui";

export default function ChooseBuddy() {
  const { name, setBoardingComplete, setPet } = useStore();
  const navigate = useRouter();

  const handleNext = useCallback((animal: BuddyProps["type"]) => {
    setBoardingComplete(true);
    setPet(animal);
    navigate.replace("/stories/first-story-1");
  }, []);

  return (
    <View flex={1} alignItems="center" justifyContent="center" pb="$8">
      <Text fontSize="$7" mb="$2" opacity={0.75}>
        Salut, {name}!
      </Text>
      <Text fontSize="$9" mb="$4">
        Alege un animăluț
      </Text>

      <XStack gap="$4" mb="$10">
        <Buddy type="dog" onPress={() => handleNext("dog")} />
        <Buddy type="cat" onPress={() => handleNext("cat")} />
      </XStack>

      <ButtonBack />
    </View>
  );
}
