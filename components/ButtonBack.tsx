import { GetProps, styled } from "@tamagui/core";
import { MoveLeft } from "@tamagui/lucide-icons";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Text } from "tamagui";

const ButtonBack = styled(Button, {
  name: "ButtonBack",
  borderBottomWidth: 0,
  px: "$4",
  size: "$6",
  backgroundColor: "transparent",
  borderWidth: 0,
  fontSize: "$7",
  pressStyle: {
    backgroundColor: "transparent",
    position: "relative",
    top: 2,
  },
});

function ButtonBackComponent(props: GetProps<typeof ButtonBack>) {
  const navigate = useRouter();

  return (
    <ButtonBack
      onPress={() => {
        navigate.back();
      }}
      {...props}
    >
      <MoveLeft size="$3" mr="$2" />
      Înapoi
    </ButtonBack>
  );
}

export type ButtonBackProps = GetProps<typeof ButtonBack>;
export default ButtonBackComponent;
