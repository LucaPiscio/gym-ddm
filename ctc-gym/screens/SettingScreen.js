import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

const SettingsScreen = () => {
    return (
      <View>
        <Text style={styles.text}>
          Settings Screen
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      textAlign: "center",
      marginTop: "20%"
    }
  });
  
  export default SettingsScreen;
  