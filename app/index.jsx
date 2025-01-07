import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Category from "./components/Category";
import COLORS from "./constants/COLOR";
import OfferCard from "./components/offer-cards";
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
        {/* Offer Cards */}
        <View style={styles.offerContainer}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Light",
              fontWeight: "bold",
              margin: 10,
              color: COLORS.secondary,
            }}
          >
            Exclusive Offers for You
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            <OfferCard
              text={"Fresh Deals, Fresh Groceries!"}
              description={
                "Get Up to 50% OFF on Groceries at Vegemart! Save Big While You Shop!"
              }
              image={
                "https://images.unsplash.com/photo-1498579397066-22750a3cb424?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <OfferCard
              text={"Fresh Deals, Fresh Groceries!"}
              description={
                "Get Up to 50% OFF on Groceries at Vegemart! Save Big While You Shop!"
              }
              image={
                "https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <OfferCard
              text={"Fresh Deals, Fresh Groceries!"}
              description={
                "Get Up to 50% OFF on Groceries at Vegemart! Save Big While You Shop!"
              }
              image={
                "https://plus.unsplash.com/premium_photo-1663011122314-ed94208842d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            {/* Add more cards as needed */}
          </ScrollView>
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
    backgroundColor: COLORS.white,
    borderRadius: 20,
    placeholderTextColor: COLORS.primary,
    padding: 10,
    margin: 10,
  },
  searchBtn: {
    position: "absolute",
    color: COLORS.white,
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
    paddingBottom: 30,
  },
  offerContainer: {
    padding: 6,
    backgroundColor: COLORS.white,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
