import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import COLORS from "../constants/COLOR";

const OfferCard = ({ text, description, image }) => {
  return (
    <ImageBackground
      source={{
        uri: image,
      }}
      style={styles.backgroundImage}
      imageStyle={{ borderRadius: 15 }}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.heading}>{text}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity>
          <Text style={styles.btn}>GRAB THE DEAL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 10,
    padding: 10,
    width: 320,
    height: "auto",
    borderRadius: 15,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(1, 180, 94, 0.8)",
  },
  content: {
    padding: 10,
    borderRadius: 15,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    width: "70%",
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.white,
  },
  description: {
    fontFamily: "Poppins-Light",
    width: "70%",
    fontSize: 10,
    color: COLORS.white,
  },
  btn: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "48%",
    fontSize: 15,
    borderRadius: 15,
    marginTop: 10,
    textAlign: "center",
  },
});
