import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Category = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/fruit.png")}
        style={styles.img}
      />
      <Text style={{ paddingTop: 5, color: "#fff", fontWeight: "bold" }}>
        Fruits
      </Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    // paddingHorizontal: 10,
    borderRadius: 50,
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
});
