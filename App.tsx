import { StatusBar, SafeAreaView, Text } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Cesta } from "./src/screens/Cest";
import { Cest } from "./src/mocks/Cest";

const App = () => {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta data={Cest} />
    </SafeAreaView>
  );
};

export default App;
