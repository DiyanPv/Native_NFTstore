import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { CircleButton, RectButton } from "../constants";
import { SubInfo } from "../components/SubInfo";
import StatusBarView from "../components/StatusBar";
import { DetailsBid, DetailsDescription } from "../components/DetailComponents";

const DetailsHeader = ({ image }) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: `100%`, height: 370 }}>
      <Image
        source={image}
        resizeMode="cover"
        style={{ width: `100%`, height: `100%` }}
      />
      <CircleButton
        imageUrl={assets.left}
        left={10}
        top={15}
        handlePress={() => {
          navigation.goBack();
        }}
      />
      <CircleButton
        imageUrl={assets.heart}
        right={10}
        top={15}
        handlePress={() => {}}
      />
    </View>
  );
};
export const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBarView barStyle="dark-content" backgroundColor="transparent"/>

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.4)",
          zIndex: 1,
        }}
      >
        <RectButton
          fontSize={16}
          width={200}
          {...SHADOWS.dark}
          backgroundColor={"rgba(63, 246, 238, 0.9)"}
        />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader image={data.image} />
            <SubInfo />
            <DetailsDescription data={data} />
            {data.bids.length > 0 && (
              <Text
                style={{
                  marginBottom: 15,
                  fontSize: 14,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                  marginLeft: 10, 
                }}
              >
                Current Bid
              </Text>
            )}
          </React.Fragment>
        )}
        data={data.bids}
        renderItem={({ item }) => (
          <DetailsBid
            bid={item}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 45 }}
          />
        )}
      />

    </SafeAreaView>
  );
};
