import { StyleSheet, Text } from "react-native";

export type TextStyledProps = {
  textContent: string;
  customStyle: any;
  isBold: boolean;
};

export const TextStyled = ({
  textContent,
  customStyle,
  isBold,
}: TextStyledProps) => {
  let isBoldStyle = isBold ? styles.boldText : styles.text;
  return <Text style={[isBoldStyle, customStyle]}>{textContent}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",  
  },
  boldText: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
