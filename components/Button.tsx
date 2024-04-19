import { Button as TamaguiButton } from "tamagui";
import { GetProps, styled } from "@tamagui/core";

const Button = styled(TamaguiButton, {
  name: "TTButton",
  borderWidth: 2,
  borderBottomWidth: 6,
  borderColor: "$accentColor",
  pressStyle: {
    borderBottomWidth: 4,
    position: "relative",
    top: 2,
    borderColor: "$accentColor",
  },
});

export type ButtonProps = GetProps<typeof Button>;
export default Button;
