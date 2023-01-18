import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

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

export const RectButton = ({ handlePress, fontSize, minWidth, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        marginBottom: 8,
        backgroundColor: `black`,
        ...props,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: 12,
          color: `white`,
          textAlign: `center`,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
