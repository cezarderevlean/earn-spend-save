import { Button as TamaguiButton } from "tamagui";
import { GetProps, styled } from "@tamagui/core";

const Button = styled(TamaguiButton, {
  name: "MyButton",
  borderWidth: 2,
  borderBottomWidth: 5,
  borderColor: "$black05",
  pressStyle: {
    borderColor: "$black05",
    position: "relative",
    borderBottomWidth: 4,
    top: 1,
  },
});

export type ButtonProps = GetProps<typeof Button>;
export default Button;
