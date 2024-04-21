import { ButtonNext } from "@/components";
import { useStore } from "@/context/main";
import { Link } from "expo-router";
import { View } from "tamagui";
import Logo from "../assets/images/logo.svg";

export default function Welcome() {
  const { boardingComplete } = useStore();

  const nextRoute = boardingComplete ? "/(tabs)/" : "/onboarding/name";

  return (
    <View flex={1} alignItems="center" justifyContent="center" pb="$8">
      <Logo width={200} />
      <Link replace href={nextRoute} asChild>
        <ButtonNext />
      </Link>
    </View>
  );
}
