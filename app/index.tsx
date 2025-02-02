import WelcomeSwiper from "@/components/WelcomeSwiper";
import { useTheme } from "@/hooks/useTheme";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const {
    theme: { colors },
    toggleTheme,
  } = useTheme();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/welcom_bg.png")}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <Image
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.content, { backgroundColor: colors.background }]}>
        <WelcomeSwiper />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.buttonBg }]}
            onPress={toggleTheme}
          >
            <Text style={[styles.buttonText, { color: colors.buttonText }]}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "flex-start",
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default WelcomeScreen;
