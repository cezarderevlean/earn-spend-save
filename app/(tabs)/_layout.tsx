import { Tabs } from "expo-router";
import { Coins, Tag, BadgePercent } from "@tamagui/lucide-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "orange",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Earn",
          tabBarIcon: ({ color }) => <Coins />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Spend",
          tabBarIcon: ({ color }) => <Tag />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Save",
          tabBarIcon: ({ color }) => <BadgePercent />,
        }}
      />
    </Tabs>
  );
}
