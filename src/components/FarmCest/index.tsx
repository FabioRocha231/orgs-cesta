import { FlatList, Text, View } from "react-native";
import Item from "../CestItems";
import { FarmLogoAndName } from "../FarmLogoAndName";
import { GenericButton } from "../GenericButton";
import { TextStyled } from "../TextStyled";
import { FarmCestStyles } from "./styles";

export type FarmCestProps = {
  data: any;
};

export const FarmCest = ({ data }: FarmCestProps) => {
  return (
    <View style={FarmCestStyles.cest}>
      <TextStyled
        isBold={true}
        textContent={data.farmCest.cestName}
        customStyle={FarmCestStyles.cestName}
      />
      <FarmLogoAndName
        farmLogo={data.farmCest.farmLogo}
        farmName={data.farmCest.farmName}
      />
      <TextStyled
        isBold={false}
        customStyle={FarmCestStyles.description}
        textContent={data.farmCest.farmDescription}
      />
      <Text style={FarmCestStyles.price}>{data.farmCest.price} </Text>

      <GenericButton
        buttonCustomStyles={{ marginTop: 16 }}
        textContent={data.farmCest.button}
        onPress={() => console.log("abestadoooo")}
      />
    </View>
  );
};
