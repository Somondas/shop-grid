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
import COLORS from "./constants/COLOR";
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
          <Category
            img={require("../assets/images/fruit.png")}
            title="Fruits"
          />
          <Category
            img={require("../assets/images/vegetable.png")}
            title="Vegetables"
          />
          <Category img={require("../assets/images/diary.png")} title="Dairy" />
          <Category
            img={require("../assets/images/see-all.png")}
            title="See All"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// >> Styles___________________
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
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
    placeholderTextColor: COLORS.primary,
    padding: 10,
    margin: 10,
  },
  searchBtn: {
    position: "absolute",
    color: "#fff",
    right: 3,
    backgroundColor: COLORS.primary,
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
    paddingBottom: 40,
  },
});
