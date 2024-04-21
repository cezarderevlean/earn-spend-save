import { Image, View } from "tamagui";
import Button from "./Button";

function Buddy({ type, ...props }: BuddyProps) {
  const source =
    type === "cat"
      ? require(`../assets/images/cat.png`)
      : require(`../assets/images/dog.png`);
  return (
    <Button
      mt="$6"
      size="$9"
      width={160}
      height={160}
      borderBottomWidth={7}
      overflow="hidden"
      borderRadius="$8"
      {...props}
    >
      <Image style={{ width: 130, height: 130 }} source={source} />
    </Button>
  );
}

export type BuddyProps = {
  type: "cat" | "dog";
} & React.ComponentProps<typeof Button>;

export default Buddy;
