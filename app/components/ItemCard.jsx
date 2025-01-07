import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../constants/COLOR";

const ItemCard = ({ price, name, image }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 150,
        }}
      >
        <Image
          style={styles.img}
          source={{
            uri: image,
          }}
        />
      </View>
      <Text style={styles.heading}>{name}</Text>
      <Text
        style={{
          fontSize: 13,
          color: COLORS.secondary,
          fontWeight: "Popins-Light",
        }}
      >
        Rs.{price}
        <Text
          style={{
            fontSize: 10,
            color: COLORS.secondary,
            fontWeight: "Popins-Light",
            marginTop: 5,
          }}
        >
          /kg
        </Text>
      </Text>
      <TouchableOpacity>
        <Text style={styles.btn}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    width: 150,
    padding: 5,
    fontFamily: "Poppins-Regular",
  },
  img: {
    width: "full",
    height: 150,
    borderRadius: 10,
    // resizeMode: "contain",
    overflow: "hidden",
  },
  heading: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: "bold",
    marginTop: 5,
    textTransform: "capitalize",
  },
  btn: {
    padding: 5,
    borderWidth: 2,
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});
