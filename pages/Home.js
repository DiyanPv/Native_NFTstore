import React from "react";
import { useState } from "react";
import { COLORS, NFTData } from "../constants/index";
import { Text, SafeAreaView, FlatList, View, StyleSheet } from "react-native";
import { HomeHeader } from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";
import StatusBarView from "../components/StatusBar";
import { LinearGradient } from "expo-linear-gradient";
const styles = StyleSheet.create({
  background: "linear-gradient(to right, ##C6FFDD, ##f7797d, #EAEAEA)",
});
export const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch= (value) => {
    if(!value.length>0){
      setNftData(NFTData)
    }else{
      const FilteredNFTData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
      if(FilteredNFTData.length){
        setNftData(FilteredNFTData)
      }else{
        setNftData(NFTData)
      }
    }
    }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBarView background="black" />
      <LinearGradient
        colors={["#ADA996", "#DBDBDB", "#f7797d"]}
        style={styles.background}
      >
        <FlatList
          data={nftData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          renderItem={({ item }) => <NFTCard data={item} key={item.id} />}
        />
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}></View>
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
          />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
    </SafeAreaView>
  );
};
