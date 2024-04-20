import { Link } from "expo-router";
import { Image, View } from "tamagui";
import { AdventureMap, Button, ButtonNext, JourneyStep } from "@/components";
import { StarFull } from "@tamagui/lucide-icons";

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="center" pt="$6">
      <ButtonNext />
      <Link href="/modal" asChild>
        <Button mt="$6">modal</Button>
      </Link>
      <Button mt="$6">Copaci</Button>
      <JourneyStep mt="$6" />
      <Button mt="$6" size="$9" borderBottomWidth={7}>
        <StarFull size="$4" /> Copaci
      </Button>

      <Button
        mt="$6"
        size="$9"
        maxWidth={300}
        p={0}
        height={150}
        borderBottomWidth={7}
        overflow="hidden"
        backgroundColor="$accentColor"
        borderRadius="$8"
      >
        <Image
          width="100%"
          height="100%"
          borderRadius="$7"
          source={require("../../assets/images/helping-hands.jpg")}
          resizeMode="stretch"
        />
      </Button>
    </View>
  );
}
