import { GetProps, styled } from "@tamagui/core";
import { MoveRight } from "@tamagui/lucide-icons";
import Button from "@/components/Button";

const ButtonNext = styled(Button, {
  name: "ButtonNext",
  minWidth: "$14",
  size: "$6",
  children: <MoveRight size="$4" />,
});

export type ButtonNextProps = GetProps<typeof ButtonNext>;
export default ButtonNext;
