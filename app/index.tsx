import { ButtonNext } from "@/components";
import { Link } from "expo-router";
import { Image, Text, View } from "tamagui";

export default function Welcome() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" pb="$8">
      <Image
        width={200}
        height={200}
        source={require("../assets/images/chest.png")}
        resizeMode="contain"
        mt="$3"
      />
      <Text fontSize="$9" mb="$14">
        Tiny Treasure
      </Text>
      <Link push href="/onboarding/name" asChild>
        <ButtonNext />
      </Link>
    </View>
  );
}
