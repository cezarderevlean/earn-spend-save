import { Tabs } from "expo-router";
import { Coins as CoinsIcon, Tag, BadgePercent } from "@tamagui/lucide-icons";
import HeaderTitle from "@/components/HeaderTitle";

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
          headerTitle: () => <HeaderTitle />,
          tabBarIcon: ({ color }) => <CoinsIcon />,
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
