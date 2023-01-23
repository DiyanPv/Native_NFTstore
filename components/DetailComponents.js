import { View, Text, Image, StatusBar, FlatList } from "react-native";
import { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
export const DetailsBid = () => <Text>Details</Text>;

export const DetailsDescription = ({data}) => {
  return (
    <View style={{width: `100%`, flexDirection: `row`, justifyContent: `space-between`, alignItems: `center`}}>
  <NFTTitle title={data.name} subTitle={data.creator} titleSize={14} subTitleSize={12}/>
  <EthPrice price={data.price}/>
    </View>
  );
};
