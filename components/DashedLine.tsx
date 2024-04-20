import { View, ViewProps } from "tamagui";

function DashedLine(props: ViewProps) {
  return (
    <View
        position="absolute"
        borderWidth={2}
        borderStyle="dashed"
        height={0}
        width={95}
        {...props}
      ></View>
  );
}

export default DashedLine;