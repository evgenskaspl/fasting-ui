import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

import { SafeAreaView } from "react-native";
import Alarm from "../../components/Alarm";

export default function AlarmScreen() {
  return (
    <ParallaxScrollView
      headerImage={<IconSymbol size={310} color="#808080" name="alarm" />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Alarm</ThemedText>
      </ThemedView>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Alarm />
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
