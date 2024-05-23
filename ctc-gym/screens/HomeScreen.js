import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323D45', // Aquí defines el color de fondo
    justifyContent: 'center', // Opcional: para centrar el contenido verticalmente
    alignItems: 'center' // Opcional: para centrar el contenido horizontalmente
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%",
    color: "#09814A",
  }
});

export default HomeScreen;
