import { Image, ImageSourcePropType } from "react-native";
import { TextStyled } from "../TextStyled";
import cestHeader from "../../../assets/topo.png";
import { TopComponentStyles } from "./styles";
import { FarmCestProps } from "../FarmCest";
export const TopComponent = ({data}: FarmCestProps) => {
  return (
    <>
      <Image style={TopComponentStyles.header} source={cestHeader as ImageSourcePropType} />
      <TextStyled
        isBold={true}
        textContent={data.topComponent.textContent}
        customStyle={TopComponentStyles.title}
      />
    </>
  );
};


