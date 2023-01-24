import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
export const HomeHeader = ({onSearch}) => {

  return (
    <View style={{ backgroundColor: `black`, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          backgroundColor: `black`,
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 140, height: 90 }}
        />
        <View style={{ width: 45, height: 45, marginRight: 15 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: `100%`, height: `100%` }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{ width: 15, height: 15, bottom: 0, position: `absolute` }}
          />
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: `white`,
            marginBottom: 12,
          }}
        >
          Hello, User👋.
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.font,
            color: `white`,
            marginBottom: 12,
          }}
        >
          Have fun browsing through our NFT collection!
        </Text>
        <View style={{ marginTop: 14 }}>
          <View
            style={{
              width: `100%`,
              backgroundColor: COLORS.gray,
              flexDirection: `row`,
              paddingRight: 10,
              paddingLeft: 10,
              paddingTop: 4,
              borderRadius: 8,
            }}
          >
            <Image
              source={assets.search}
              style={{
                width: 25,
                height: 25,
                marginRight: 10,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={`white`}
   
              onChange={onSearch}
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};
