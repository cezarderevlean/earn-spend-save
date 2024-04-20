import { Image, View } from "tamagui";
import Button from "./Button";

function Buddy({ type }: BuddyProps) {
  const source =
    type === "cat"
      ? require(`../assets/images/cat.png`)
      : require(`../assets/images/dog.png`);
  return (
    <Button
        mt="$6"
        size="$9"
        width={180}
        height={180}
        borderBottomWidth={7}
        overflow="hidden"
        backgroundColor="$accentColor"
        borderRadius="$8"
      >

        <Image style={{ width: 130, height: 130 }} source={source} />
      </Button>
  );
}

export type BuddyProps = {
  type: "cat" | "dog";
};

export default Buddy;
