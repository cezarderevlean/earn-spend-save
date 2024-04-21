import { ButtonNext } from "@/components";
import { Link } from "expo-router";
import { Fragment } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { Text, View } from "tamagui";

export default function FirstStory() {
  return (
    <Fragment>
      <ImageBackground
        style={{ flex: 1, marginBottom: -64, width: "100%" }}
        source={require("../../assets/images/miner.jpg")}
      >
        <SafeAreaView>
          <View
            p="$6"
            alignItems="flex-start"
            justifyContent="flex-end"
            height="100%"
          >
            <View
              backgroundColor="#000a"
              p="$6"
              pb="$12"
              mx="$-6"
              mb="$-10"
              width={400}
              height={450}
            >
              <Text fontSize="$9" mb="$6">
                Peșterile Frământărilor
              </Text>
              <Text fontSize="$6" mb="$7" lineHeight="$5">
                În Peșterile Framantarilor, Ica întâlnește un miner bătrân numit
                Investo, care caută ajutor pentru a-și repara căruța stricată
                pentru a transporta pietrele prețioase extrase.
              </Text>

              <Link href="/stories/second-story-2" asChild>
                <ButtonNext />
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </Fragment>
  );
}
