import { XStack } from "tamagui";
import Badge from "@/components/Badge";
import Coins from "@/components/Coins";

function HeaderTitle() {
  // get amount from context
  return (
    <XStack justifyContent="flex-end">
      <Coins amount={100} />
    </XStack>
  );
}

export default HeaderTitle;
