import { View, Text, Image, StatusBar, FlatList } from "react-native";
import { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
export const DetailsBid = ({ bid }) => (
  <View
    style={{
      flexDirection: `row`,
      width: `100%`,
      justifyContent: `space-around`,
      alignItems: `center`,
      marginVertical: 10,
    }}
  >
    <Image
      source={bid.image}
      resizeMode="contain"
      style={{ width: 50, height: 50 }}
    />
    <EthPrice price={bid.price} marginRight={10} font={11} />
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Bid placed by {bid.name}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
          marginTop: 3,
        }}
      >
        Bid placed on {bid.date}
      </Text>
    </View>
  </View>
);

export const DetailsDescription = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <View>
      <View
        style={{
          width: `100%`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          marginBottom: 16,
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={16}
          subTitleSize={12}
          marginLeft={10}
          marginRight={10}
        />
        <EthPrice price={data.price} marginRight={10} />
      </View>
      <View style={{ marginVertical: 16 * 1.5 }}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 12,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Text
            style={{
              marginLeft: 14,

              width: `100%`,
              fontSize: 10,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
            }}
          >
            {text}
            {!readMore && `...`}
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              cursor: `pointer`,
              borderRadius: 8,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 2,
              paddingBottom: 2,
              borderColor: `black`,
              borderStyle: `solid`,
              borderWidth: 2,
              backgroundColor: `white`,
             
            }}
            onPress={() => {
              if (!readMore) {
                setReadMore(true);
                setText(data.description);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}
          >
            {readMore ? `Show Less` : `Read More`}
          </Text>
        </View>
      </View>
    </View>
  );
};
