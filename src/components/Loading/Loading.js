import AnimatedLottieView from "lottie-react-native";
import React from "react";
function Loading() {
  return (
    <AnimatedLottieView
      source={require("../../assets/loading.json")}
      autoPlay
    />
  );
}

export default Loading;
