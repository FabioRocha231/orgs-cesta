import { Text, View } from "react-native";
import { FarmLogoAndName } from "../FarmLogoAndName";
import { TextStyled } from "../TextStyled";
import logo from "../../../assets/logo.png";

import { FarmCestStyles } from "./styles";
import { Cest } from "../../mocks/Cest";

export const FarmCest = () => {
  return (
    <View style={FarmCestStyles.cest}>
      <TextStyled
        isBold={true}
        textContent={Cest.farmCest.cestName}
        customStyle={FarmCestStyles.cestName}
      />
      <FarmLogoAndName farmLogo={logo} farmName={Cest.farmCest.farmName} />
      <TextStyled
        isBold={false}
        customStyle={FarmCestStyles.description}
        textContent={Cest.farmCest.farmDescription}
      />
      <Text style={FarmCestStyles.price}>R$ 40,00</Text>
    </View>
  );
};
