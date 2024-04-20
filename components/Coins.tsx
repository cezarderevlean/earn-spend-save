import { Image, Text, XStack } from "tamagui";

function Coins({ amount }: CoinsProps) {
  return (
    <XStack justifyContent="space-between" alignItems="center" gap={5}>
      <Text>{amount}</Text>
      <Image
        width={20}
        height={20}
        source={require("../assets/images/coin.png")}
      />
    </XStack>
  );
}

export type CoinsProps = {
  amount: number;
};

export default Coins;
