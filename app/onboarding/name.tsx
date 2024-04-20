import { ButtonNext, Input } from "@/components";
import { Link } from "expo-router";
import { Fragment } from "react";
import { Text } from "tamagui";

export default function Name() {
  return (
    <Fragment>
      <Text fontSize="$9" my="$6">
        Salut!
      </Text>
      <Input
        mb="$6"
        placeholder="Care este numele tău?"
        size="$6"
        width={300}
        textAlign="center"
      />
      <Link push href="/onboarding/choose-buddy" asChild>
        <ButtonNext />
      </Link>
    </Fragment>
  );
}
