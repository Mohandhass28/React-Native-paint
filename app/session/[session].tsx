import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import DrawingBoard from "~/components/DrawingBoard";

const page = () => {
  const { session } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{ title: `Session ${session}`, headerTitleAlign: "center" }}
      />
      <DrawingBoard />
    </View>
  );
};

export default page;
