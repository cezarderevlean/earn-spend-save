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
        source={require("../../assets/images/path.jpg")}
      >
        <SafeAreaView>
          <View p="$6" alignItems="flex-start">
            <Text fontSize="$9" color="$color1" mb="$6">
              Țara Generozității
            </Text>
            <Text color="$color1" fontSize="$6" mb="$7" lineHeight="$5">
              In acest joc, vei face alegeri care o vor ghida pe Ica prin țara
              Generozitatii. Deciziile tale te vor învăța despre generozitate și
              educație financiară. Ești gata să începi? Să mergem!
            </Text>

            <Link push href="/(tabs)/" asChild>
              <ButtonNext />
            </Link>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </Fragment>
  );
}
