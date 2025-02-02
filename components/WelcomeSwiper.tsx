import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Welcome to Fasting Break",
    description:
      "Discover how our app can help you\nachieve your fasting goals with ease.",
  },
  {
    title: "Track Your Fasting",
    description:
      "Monitor your fasting progress easily\nand stay on track with reminders.",
  },
  {
    title: "Stay Healthy",
    description: "Achieve your health goals\nwith personalized fasting plans.",
  },
];

const WelcomeSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={true}
        dotColor="#D8D8D8"
        activeDotColor="#FF7700"
        autoplayTimeout={4}
        autoplay
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  slide: {
    width: width - 40,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D1D1D",
    marginTop: 50,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
    marginTop: 10,
  },
});

export default WelcomeSwiper;
