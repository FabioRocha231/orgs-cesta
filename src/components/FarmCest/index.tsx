import { Text, View } from "react-native"
import { FarmLogoAndName } from "../FarmLogoAndName"
import { TextStyled } from "../TextStyled"
import logo from "../../../assets/logo.png";

import { FarmCestStyles } from "./styles"

export const FarmCest = () => {
  return (
    <View style={FarmCestStyles.cest}>
        <TextStyled
          isBold={true}
          textContent="Cesta de Verduras"
          customStyle={FarmCestStyles.cestName}
        />
        <FarmLogoAndName farmLogo={logo} farmName="Jenny Jack Farm" />
        <TextStyled
          isBold={false}
          customStyle={FarmCestStyles.description}
          textContent="Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha"
        />
        <Text style={FarmCestStyles.price}>R$ 40,00</Text>
      </View>
  )
}