import { Image, ImageSourcePropType, View } from "react-native";
import { TextStyled } from "../TextStyled";
import { ItensStyle } from "./styles";

export default function Item({ item: { name, image } }: any) {
  return (
    <View key={name} style={ItensStyle.list}>
      <Image source={image as ImageSourcePropType} style={ItensStyle.image} />
      <TextStyled
        textContent={name}
        customStyle={ItensStyle.name}
        isBold={false}
      />
    </View>
  );
}
