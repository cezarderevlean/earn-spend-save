import { Text, XStack } from "tamagui";

import { Coins as CoinsIcon, Tag, BadgePercent } from "@tamagui/lucide-icons";

function Coins({ amount }: CoinsProps) {
  return (
    <XStack justifyContent="space-between" alignItems="center" gap={5}>
      <Text>{amount}</Text>
      <CoinsIcon color="gold" />
    </XStack>
  );
}

export type CoinsProps = {
  amount: number;
};

export default Coins;
