import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoritesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        Esta es la pantalla de
        <Text style={styles.highlight}>"Favoritos!"</Text>
      </Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#48C9B0",
  },
  text: { color: "white", fontSize: 22, fontWeight: "bold" },
  highlight: {
    fontWeight: "bold",
    color: "yellow",
  },
});
