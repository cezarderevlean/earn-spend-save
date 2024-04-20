import { Image } from "tamagui";

const getSourceByType = (type: string) => {
  switch (type) {
    case "spender":
      return require("../assets/images/favicon.png");
    case "donator":
      return require("../assets/images/favicon.png");
    case "bestFriend":
      return require("../assets/images/favicon.png");
    case "goodFriend":
      return require("../assets/images/favicon.png");
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
  type: "spender" | "donator" | "bestFriend" | "goodFriend";
};

export default Badge;
