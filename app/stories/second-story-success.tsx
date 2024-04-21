import {
  Badge, ButtonNext
} from "@/components";
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
                Super generos!
              </Text>
              <Text fontSize="$6" mb="$5" lineHeight="$5">
                Este foarte bine să oferi ajutor fără a cere nimic la schimb!
              </Text>
              <View display="flex" flexDirection="row" justifyContent="center" mb="$5">
                <Badge type="goodFriend" />
              </View>
              <Link href="/(tabs)/" asChild>
                <ButtonNext />
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </Fragment>
  );
}
