import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ title, img }) => {
  console.log(img);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
      <Text
        style={{
          paddingTop: 5,
          fontFamily: "Poppins-Medium",
          color: "#fff",
        }}
      >
        {title}
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
