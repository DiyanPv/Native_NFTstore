import React from "react";
import { useState } from "react";
import { COLORS, NFTData } from "../constants/index";
import { Text, SafeAreaView, FlatList, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";
import StatusBarView from "../components/StatusBar";
export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBarView background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            renderItem={({ item }) => <NFTCard data={item} key={item.id} />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View
          style={{
            height: 300,
            backgroundColor: COLORS.primary,
          }}
        ></View>
      </View>

      <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
    </SafeAreaView>
  );
};
