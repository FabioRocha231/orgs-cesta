import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Cesta } from "./src/screens/Cesta";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
};

export default App;
