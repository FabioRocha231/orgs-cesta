import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import cestHeader from "../../assets/topo.png";
const width = Dimensions.get("window").width;

export const Cesta = () => {
  return (
    <>
      <Image style={styles.header} source={cestHeader as ImageSourcePropType} />
      <Text style={styles.title}>Detalhes da cesta</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16
  },
});
