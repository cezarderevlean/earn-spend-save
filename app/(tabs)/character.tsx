import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Image, Text, View, XStack } from "tamagui";
import * as WebBrowser from "expo-web-browser";
import { Buddy } from "@/components";

export default function TabTwoScreen() {
  const [no, setNo] = useState(1);

  const { isPending, error, data, isFetching, isSuccess } = useQuery({
    queryKey: ["test", no],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${no}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  return (
    <View flex={1} alignItems="center" pt="$6">
      <Button
        theme="alt2"
        themeInverse
        mb="$10"
        onPress={() => setNo((v) => v + 1)}
      >
        Another!
      </Button>

      {isFetching && <Text>Loading...</Text>}
      {isSuccess && <Text>{data.title}</Text>}
      {isSuccess && (
        <Image
          mt="$4"
          source={{ width: 200, height: 200, uri: data.thumbnailUrl }}
        />
      )}
      {isSuccess && (
        <Button mt="$4" onPress={() => WebBrowser.openBrowserAsync(data.url)}>
          Open
        </Button>
      )}
      <XStack gap={10}>
        <Buddy type="cat" />
        <Buddy type="dog" />
      </XStack>
    </View>
  );
}
