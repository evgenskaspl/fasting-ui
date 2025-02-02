import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { ThemedText } from "./common/ThemedText";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const WelcomeSwiper = () => {
  const {
    theme: { colors },
  } = useTheme("text");
  const { t } = useTranslation();

  const slides = [
    {
      title: t("welcome"),
      description: t("welcom_descritpion_slide_1"),
    },
    {
      title: "Track Your Fasting",
      description:
        "Monitor your fasting progress easily\nand stay on track with reminders.",
    },
    {
      title: "Stay Healthy",
      description:
        "Achieve your health goals\nwith personalized fasting plans.",
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={true}
        dotColor={colors.dot}
        activeDotColor={colors.activeDot}
        autoplayTimeout={4}
        autoplay
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <ThemedText type="title" style={styles.title}>
              {slide.title}
            </ThemedText>
            <ThemedText type="default" style={styles.description}>
              {slide.description}
            </ThemedText>
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
    marginTop: 50,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});

export default WelcomeSwiper;
