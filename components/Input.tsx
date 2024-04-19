import { Input as TamaguiInput } from "tamagui";
import { GetProps, styled } from "@tamagui/core";

const Input = styled(TamaguiInput, {
  name: "MyInput",
  borderWidth: 2,
  borderColor: "$orange7Light",
  focusStyle: {
    borderColor: "$accentColor",
  },
});

export type InputProps = GetProps<typeof Input>;
export default Input;
