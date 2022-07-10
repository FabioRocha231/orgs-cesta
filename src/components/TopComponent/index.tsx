import { Image, ImageSourcePropType } from "react-native";
import { TextStyled } from "../TextStyled";
import cestHeader from "../../../assets/topo.png";
import { TopComponentStyles } from "./styles";
export const TopComponent = () => {
  return (
    <>
      <Image style={TopComponentStyles.header} source={cestHeader as ImageSourcePropType} />
      <TextStyled
        isBold={true}
        textContent="Detalhes da cesta"
        customStyle={TopComponentStyles.title}
      />
    </>
  );
};


