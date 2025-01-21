import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Button from "@ant-design/react-native/lib/button";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  cancelAnimation,
  runOnJS,
} from "react-native-reanimated";

const RADIUS = 100;
const STROKE_WIDTH = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TOTAL_DURATION = 10000; // Total duration for the demo (10 seconds)

// Create an animated Circle component using react-native-reanimated
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FastingTracker = () => {
  const progress = useSharedValue(0); // Shared value to animate
  const [isRunning, setIsRunning] = useState(false); // State to track if the animation is running
  const [remainingTime, setRemainingTime] = useState(TOTAL_DURATION / 1000); // Timer
  // Animated props for the Circle component
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: CIRCUMFERENCE * (1 - progress.value), // Update strokeDashoffset based on progress
    };
  });

  // Function to start the animation and timer
  const startAnimation = () => {
    setIsRunning(true);
    progress.value = withTiming(
      1,
      {
        duration: TOTAL_DURATION,
      },
      (isFinished) => {
        if (isFinished) {
          runOnJS(setIsRunning)(false); // Set running to false when finished
        }
      }
    );

    // Timer countdown logic
    const interval = setInterval(() => {
      setRemainingTime((time) => {
        if (time <= 1) {
          clearInterval(interval);
          return 0;
        }
        return time - 1;
      });
    }, 1000);
  };

  // Function to stop the animation and timer
  const stopAnimation = () => {
    setIsRunning(false);
    cancelAnimation(progress); // Stop the animation
  };

  // Function to reset the animation and timer
  const resetAnimation = () => {
    setIsRunning(false);
    progress.value = 0; // Reset progress to 0
    setRemainingTime(TOTAL_DURATION / 1000); // Reset timer
  };

  return (
    <View style={styles.container}>
      <Svg height={RADIUS * 2 + STROKE_WIDTH} width={RADIUS * 2 + STROKE_WIDTH}>
        {/* Static background Circle */}
        <Circle
          stroke="#d6f1df"
          fill="none"
          cx={RADIUS + STROKE_WIDTH / 2}
          cy={RADIUS + STROKE_WIDTH / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />

        {/* Animated Circle */}
        <AnimatedCircle
          stroke="#0ef45b"
          fill="none"
          cx={RADIUS + STROKE_WIDTH / 2}
          cy={RADIUS + STROKE_WIDTH / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          animatedProps={animatedProps} // Use the animated props here
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{remainingTime}s</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* Start Button */}
        <Button style={styles.button} type="ghost" onPress={startAnimation} disabled={isRunning}>
          Start
        </Button>
        {/* Stop Button */}
        <Button style={styles.button} type="ghost" onPress={stopAnimation} disabled={!isRunning}>
          Stop
        </Button>
        {/* Reset Button */}
        <Button style={styles.button} type="ghost" onPress={resetAnimation}>Reset</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    borderColor: 'transparent',
  },
  timerContainer: {
    position: "absolute",
    top: "32%",
    alignItems: "center",
  },
  timerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0bb52e",
  },
  labelText: {
    fontSize: 14,
    color: "#888",
  },
});

export default FastingTracker;
