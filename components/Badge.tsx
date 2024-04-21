import { Image } from "tamagui";

const getSourceByType = (type: string) => {
  switch (type) {
    case "spender":
      return require("../assets/images/risipitor.png");
    case "saver":
      return require("../assets/images/econom.png");
    case "bestFriend":
      return require("../assets/images/best_friend.png");
    case "goodFriend":
      return require("../assets/images/good_friend-2.png");
    case "wise":
      return require("../assets/images/intelepciune.png");
    case "investor":
      return require("../assets/images/investitor.png");
    default:
      return require("../assets/images/favicon.png");
  }
};

function Badge({ type, ...rest }: BagdeProps) {
  const source = getSourceByType(type);
  return (
    <Image source={source} width={80} height={80} {...rest} />
  );
}

export type BagdeProps = {
  type: "spender" | "saver" | "bestFriend" | "goodFriend" | 'wise' | 'investor';
};

export default Badge;
