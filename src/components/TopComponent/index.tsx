import { Image, ImageSourcePropType } from "react-native";
import { TextStyled } from "../TextStyled";
import cestHeader from "../../../assets/topo.png";
import { TopComponentStyles } from "./styles";
import { Cest } from "../../mocks/Cest";
export const TopComponent = () => {
  return (
    <>
      <Image style={TopComponentStyles.header} source={cestHeader as ImageSourcePropType} />
      <TextStyled
        isBold={true}
        textContent={Cest.topComponent.textContent}
        customStyle={TopComponentStyles.title}
      />
    </>
  );
};


