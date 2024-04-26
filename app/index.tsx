import { router } from "expo-router";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";

export default function Home() {
  const [session, setsession] = useState("");
  const handle = () => {
    if (session === "") {
      return Alert.alert("Session", "Enter Session name");
    }
    router.navigate(`/session/${session}`);
  };
  return (
    <>
      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "green",
            height: 50,
            borderRadius: 10,
            paddingLeft: 10
          }}
          value={session}
          onChangeText={(text: string) => {
            setsession(text);
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
            padding: 15,
          }}
          onPress={handle}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Session
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
