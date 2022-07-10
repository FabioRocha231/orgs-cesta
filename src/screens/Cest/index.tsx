import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FarmLogoAndName } from "../../components/FarmLogoAndName";
import logo from "../../../assets/logo.png";
import { TextStyled } from "../../components/TextStyled";
import { TopComponent } from "../../components/TopComponent";



export const Cesta = () => {
  return (
    <>
      <TopComponent />

      <View style={styles.cest}>
        <TextStyled
          isBold={true}
          textContent="Cesta de Verduras"
          customStyle={styles.cestName}
        />
        <FarmLogoAndName farmLogo={logo} farmName="Jenny Jack Farm" />
        <TextStyled
          isBold={false}
          customStyle={styles.description}
          textContent="Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha"
        />
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  
  cest: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cestName: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
