import { Buddy, ButtonBack, ButtonNext, Input } from "@/components";
import { Link } from "expo-router";
import { Fragment } from "react";
import { Text, XStack } from "tamagui";

export default function ChooseBuddy() {
  return (
    <Fragment>
      <Text fontSize="$7" mb="$2" opacity={0.75}>
        Salut, Ioana!
      </Text>
      <Text fontSize="$9" mb="$4">
        Alege un animăluț
      </Text>

      <XStack gap="$4" mb="$10">
        <Buddy type="dog" />
        <Buddy type="cat" />
      </XStack>

      <ButtonBack />

      {/* <Link href="/(tabs)/three" asChild push>
        <ButtonNext />
      </Link> */}
    </Fragment>
  );
}
