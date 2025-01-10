import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f1ed00" }}>
      <View style={styles.container}>
        {/* <Image
          style={styles.img}
          source={require("../../assets/images/shopgrid-white.png")}
        /> */}
        <View className="ml-5 my-20">
          <Text className="text-3xl  font-Poppins-Bold">Create Account,</Text>
          <Text className="text-xl color-gray-400 font-Poppins-Bold">
            Sign up to get started!
          </Text>
        </View>
        <View className="px-5">
          <View className="w-full space-y-4">
            {/* Full Name Field */}
            <View>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
                className="border placeholder:color-slate-400 border-gray-300 rounded-lg px-4 py-2 bg-white "
              />
            </View>

            {/* Email Field */}
            <View>
              <Text className="text-gray-500 mb-1">Email ID</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800"
              />
            </View>

            {/* Password Field */}
            <View>
              <Text className="text-gray-500 mb-1">Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity className="bg-gradient-to-r from-pink-500 to-orange-400 py-3 rounded-lg mt-4">
              <Text className="text-center text-white font-bold text-lg">
                Login
              </Text>
            </TouchableOpacity>
          </View>
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
