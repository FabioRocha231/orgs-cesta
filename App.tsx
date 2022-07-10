import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Cesta } from "./src/screens/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const App = () => {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
};

export default App;
