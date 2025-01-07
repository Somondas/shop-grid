import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Category from "./components/Category";
export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/extra-small-logo.png")}
            alt="logo"
            style={{ width: 120, height: 40, resizeMode: "contain" }}
          />
        </View>
        {/* Search Bar */}
        <View>
          <TextInput
            placeholder="What do you want to buy today?"
            style={styles.textInput}
            // onChangeText={onSearch}
          />
          <TouchableOpacity style={styles.searchBtn}>Search</TouchableOpacity>
        </View>
        {/* Categories */}
        <View style={styles.categoryContainer}>
          <Category />
          <Category />
          <Category />
          <Category />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01b45e",
    fontFamily: "Poppins-Regular",
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    placeholderTextColor: "#01b45e",
    padding: 10,
    margin: 10,
  },
  searchBtn: {
    position: "absolute",
    color: "#fff",
    right: 3,
    backgroundColor: "#01b45e",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 3,
    top: 2,
    // fontWeight: "bold",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 10,
  },
});
