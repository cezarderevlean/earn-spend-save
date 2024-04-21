import { Button } from "@/components";
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
              <Link href="/stories/second-story-success" asChild>
                <Button size="$5" my="$3">
                  Ajută fără a cere nimic în schimb
                </Button>
              </Link>
              <Link href="/stories/second-story-fail" asChild>
                <Button size="$5">Cere informații la schimb</Button>
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </Fragment>
  );
}
