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
      return require("../assets/images/good_friend.png");
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
    <Image style={{ width: 150, height: 150 }} source={source} {...rest} />
  );
}

export type BagdeProps = {
  type: "spender" | "saver" | "bestFriend" | "goodFriend" | 'wise' | 'investor';
};

export default Badge;
