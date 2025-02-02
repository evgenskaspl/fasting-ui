import WelcomeSwiper from "@/components/WelcomeSwiper";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation } from "react-native/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false }); // Hides the top header
  }, [navigation]);

  return (
    <View style={styles.container}>
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
      <View style={styles.content}>
        <WelcomeSwiper />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F432D",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
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
    backgroundColor: "#20C997",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default WelcomeScreen;
