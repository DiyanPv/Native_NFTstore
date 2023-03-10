import { View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Buttons";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imageUrl={assets.heart} right={10} top={10} />
        <SubInfo id={data.id} />
      </View>
      <View style={{ width: `100%`, padding: 24 }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>

      <View
        style={{
          marginTop: 2,
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          marginRight: 6,
          marginLeft: 6,
        }}
      >
        <EthPrice price={data.price} />
        <RectButton
          minWidth={12}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  );
};

export default NFTCard;
