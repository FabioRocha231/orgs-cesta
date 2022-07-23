import { TouchableOpacity } from "react-native";
import { TextStyled } from "../TextStyled";
import { ButtonStyles } from "./styles";

export type ButtonProps = {
  onPress?(): void;
  textContent: string;
  textCustomStyles?: any;
  buttonCustomStyles?: any;
}

export const GenericButton = ({onPress, textContent, buttonCustomStyles, textCustomStyles}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.button, buttonCustomStyles]}
    >
      <TextStyled
        isBold={true}
        customStyle={[ButtonStyles.buttonText, textCustomStyles]}
        textContent={textContent}
      />
    </TouchableOpacity>
  );
};
