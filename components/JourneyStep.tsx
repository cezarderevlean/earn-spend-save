import { GetProps, styled } from "@tamagui/core";
import { StarFull } from "@tamagui/lucide-icons";
import Button from "@/components/Button";

const JourneyStep = styled(Button, {
  name: "JourneyStep",
  borderRadius: 999,
  borderBottomWidth: 7,
  width: "$10",
  height: "$10",
  children: <StarFull size="$4" />,
  pressStyle: {
    borderColor: "$accentColor",
    position: "relative",
    borderBottomWidth: 5,
    top: 2,
  },
});

export type ButtonNextProps = GetProps<typeof JourneyStep>;
export default JourneyStep;
