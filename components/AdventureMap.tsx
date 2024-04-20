import { View } from "tamagui";
import JourneyStep from "./JourneyStep";
import DashedLine from "./DashedLine";

function AdventureMap() {
  return (
    <View position="relative" width={340} height={640}>
      {/* should add onPress events for navigating to the adventure stoory */}
      <JourneyStep position="absolute" bottom={10} left={10} />
      <DashedLine
        bottom={145}
        left={70}
        width={64}
        style={{ transform: [{ rotate: "122deg" }] }}
      />
      <JourneyStep disabled position="absolute" bottom={170} left={100} />
      <DashedLine
        top={330}
        left={170}
        width={82}
        style={{ transform: [{ rotate: "130deg" }] }}
      />
      <JourneyStep disabled position="absolute" top={190} right={10} />
      <DashedLine
        top={150}
        right={75}
        width={88}
        style={{ transform: [{ rotate: "55deg" }] }}
      />
      <JourneyStep disabled position="absolute" top="$2" right="$15" />
    </View>
  );
}

export default AdventureMap;
