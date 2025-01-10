import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f1ed00" }}>
      <View style={styles.container}>
        {/* <Image
          style={styles.img}
          source={require("../../assets/images/shopgrid-white.png")}
        /> */}
        <View className="ml-5 my-20">
          <Text className="text-3xl  font-Poppins-Bold">Welcome,</Text>
          <Text className="text-xl color-gray-400 font-Poppins-Bold">
            Sign in to continue!
          </Text>
        </View>
        <View className="px-5 my-8">
          <View className="w-full space-y-4">
            {/* Full Name Field */}
            {/* <View>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
                className="text-lg border placeholder:color-slate-400 border-gray-300 rounded-lg px-4 py-2 bg-white "
              />
            </View> */}

            {/* Email Field */}
            <View>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                className="text-lg border placeholder:color-slate-400 border-gray-300 rounded-lg px-4 py-2 bg-white "
              />
            </View>

            {/* Password Field */}
            <View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                className="text-lg  placeholder:color-slate-400 border border-gray-300 rounded-lg px-4 py-2 bg-white r"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={{
                backgroundImage: `linear-gradient(90deg, #01b45e, #00d98b)`,
              }}
              className=" py-3 rounded-lg mt-4"
            >
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

export default Login;

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
