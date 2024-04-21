import { Tabs } from "expo-router";
import {
  Cat,
  Map,
  BadgeCheck,
  MessageCircleQuestion,
} from "@tamagui/lucide-icons";
import HeaderTitle from "@/components/HeaderTitle";
import * as Haptics from "expo-haptics";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#aa00ff",
        headerTitle: () => <HeaderTitle />,
      }}
      screenListeners={{
        tabPress: (e) => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        },
      }}
    >
      <Tabs.Screen
        name="character"
        options={{
          title: "Animăluț",
          tabBarIcon: ({ color }) => <Cat color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Aventuri",
          tabBarIcon: ({ color }) => <Map color={color} />,
        }}
      />
      <Tabs.Screen
        name="badges"
        options={{
          title: "Medalii",
          tabBarIcon: ({ color }) => <BadgeCheck color={color} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: "Ajutor",
          tabBarIcon: ({ color }) => <MessageCircleQuestion color={color} />,
        }}
      />
    </Tabs>
  );
}
