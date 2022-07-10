import { Image, ImageSourcePropType, View } from "react-native";
import { TextStyled } from "../TextStyled";
import { FarmLogoStyles } from "./styles";

export type FarmLogoAndNameProps = {
  farmName: string;
  farmLogo: string;
};

export const FarmLogoAndName = ({
  farmLogo,
  farmName,
}: FarmLogoAndNameProps) => {
  return (
    <View style={FarmLogoStyles.farm}>
      <Image
        style={FarmLogoStyles.farmLogo}
        source={farmLogo as ImageSourcePropType}
      />
      <TextStyled
        isBold={false}
        // textContent="Jenny Jack Farm"
        textContent={farmName}
        customStyle={FarmLogoStyles.farmName}
      />
    </View>
  );
};
