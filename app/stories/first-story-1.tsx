import { Buddy, ButtonBack, ButtonNext, Input } from "@/components";
import { BuddyProps } from "@/components/Buddy";
import { useStore } from "@/context/main";
import { AllRoutes, Link, useRouter } from "expo-router";
import { Fragment, useCallback } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { Image, Text, View, XStack } from "tamagui";

export default function FirstStory() {
  return (
    <Fragment>
      <ImageBackground
        style={{ flex: 1, marginBottom: -64, width: "100%" }}
        source={require("../../assets/images/path.jpg")}
      >
        <SafeAreaView>
          <View p="$6" alignItems="flex-start">
            <Text fontSize="$9" color="$color1" mb="$6">
              Țara Generozității
            </Text>
            <Text color="$color1" fontSize="$6" mb="$7" lineHeight="$5">
              Călătoria ta începe aici, pe măsură ce pornești într-o călătorie
              pentru a dezvălui secretele înțelepciunii financiare. Drumul
              înainte este pavat cu alegeri — unele generoase, altele viclene.
            </Text>

            <Link href="/stories/first-story-2" asChild>
              <ButtonNext />
            </Link>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </Fragment>
  );
}
