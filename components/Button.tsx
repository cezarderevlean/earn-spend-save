import { Button as TamaguiButton } from "tamagui";
import { GetProps, styled } from "@tamagui/core";
import { StarFull } from "@tamagui/lucide-icons";

const Button = styled(TamaguiButton, {
  name: "MyButton",
  borderWidth: 2,
  borderBottomWidth: 5,
  borderColor: "$accentColor",
  pressStyle: {
    borderColor: "$accentColor",
    position: "relative",
    borderBottomWidth: 4,
    top: 1,
  },
});

export type ButtonProps = GetProps<typeof Button>;
export default Button;
