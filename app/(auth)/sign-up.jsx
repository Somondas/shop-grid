import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f1ed00" }}>
      <View style={styles.container}>
        {/* <Image
          style={styles.img}
          source={require("../../assets/images/shopgrid-white.png")}
        /> */}
        <View className="ml-5 mt-20">
          <Text className="text-3xl  font-Poppins-Bold">Create Account,</Text>
          <Text className="text-xl color-gray-400 font-Poppins-Bold">
            Sign up to get started!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f1ed00",
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
