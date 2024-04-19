import { GetProps, styled } from "@tamagui/core";
import { MoveRight } from "@tamagui/lucide-icons";
import Button from "@/components/Button";

const ButtonNext = styled(Button, {
  name: "ButtonNext",
  borderBottomWidth: 6,
  minWidth: "$14",
  size: "$6",
  children: <MoveRight size="$4" />,
  pressStyle: {
    borderColor: "$accentColor",
    position: "relative",
    borderBottomWidth: 4,
    top: 2,
  },
});

export type ButtonNextProps = GetProps<typeof ButtonNext>;
export default ButtonNext;
