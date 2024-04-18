import { Link } from "expo-router";
import { Button, Text, Theme, View } from "tamagui";

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="center" pt="$6">
      <Link href="/modal" asChild>
        <Button theme="alt2" themeInverse>
          Hello werld!
        </Button>
      </Link>
    </View>
  );
}
