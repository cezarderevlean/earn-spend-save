import { Link } from "expo-router";
import { ImageBackground, SafeAreaView } from "react-native";
import { View } from "tamagui";

export default function Adventure() {
  return (
    <ImageBackground
      style={{ flex: 1, marginBottom: -64, width: "100%" }}
      source={require("../../assets/images/adventure.jpg")}
    >
      <SafeAreaView>
        <View p="$6" alignItems="flex-start" position="relative" height="100%">
          <Link push href="/stories/second-story-1" asChild>
            <View
              position="absolute"
              bottom={83}
              right={40}
              width={60}
              height={60}
              borderRadius={999}
            />
          </Link>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
