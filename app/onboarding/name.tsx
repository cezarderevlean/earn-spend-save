import { ButtonNext, Input } from "@/components";
import { useStore } from "@/context/main";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { Text, View } from "tamagui";

export default function Name() {
  const { setName } = useStore();
  const [localName, setLocalName] = useState("");
  const navigate = useRouter();

  const handleSubmit = useCallback(() => {
    setName(localName);
    navigate.push("/onboarding/choose-buddy");
  }, [localName, setName, navigate]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={Keyboard.dismiss}>
        <View display="flex" alignItems="center">
          <Text fontSize="$9" my="$6">
            Hai să ne cunoaștem!
          </Text>
          <Input
            mb="$6"
            placeholder="Care este numele tău?"
            size="$6"
            width={300}
            textAlign="center"
            value={localName}
            onChangeText={setLocalName}
          />
          <ButtonNext onPress={handleSubmit} disabled={!localName} />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
