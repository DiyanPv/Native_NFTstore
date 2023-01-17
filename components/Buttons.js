import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imageUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: `absolute`,
        borderRadius: SIZES.extraLarge,
        alignItems: `center`,
        justifyContent: `center`,
        ...SHADOWS.dark,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imageUrl}
        style={{ resizeMode: `contain`, height: `70%` }}
      />
    </TouchableOpacity>
  );
};
