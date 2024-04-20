import { ButtonNext, Input } from "@/components";
import { Image, Text, View } from "tamagui";

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" pb="$8">
      <Image
        width={200}
        height={200}
        source={require("../../assets/images/chest.png")}
        resizeMode="contain"
        mt="$3"
      />
      <Text fontSize="$9">Tiny Treasure</Text>

      <Input
        mt="$12"
        mb="$5"
        placeholder="What's your name?"
        size="$6"
        width={300}
        textAlign="center"
      />
      <ButtonNext />
    </View>
  );
}
