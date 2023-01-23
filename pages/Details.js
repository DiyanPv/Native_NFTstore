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
      <StatusBarView barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          width: `100%`,
          position: `absolute`,
          bottom: 0,
          paddingBottom: 6,
          justifyContent: `center`,
          alignItems: `center`,
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={16}
          {...SHADOWS.dark}
          backgroundColor={"rgba(63, 246, 238, 0.9)"}
        />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader image={data.image} />
            <SubInfo />
            <DetailsDescription data={data}/>
          </React.Fragment>
        )}
        data={data.bids}
        renderItem={({ item }) => (
          <DetailsBid
            bid={item}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 45 }}
            ListHeaderComponent={() => (
              <React.Fragment>
                <DetailsHeader />
                <DetailsDescription />
              </React.Fragment>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};
