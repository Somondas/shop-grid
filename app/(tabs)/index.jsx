import { useRootNavigationState, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Category from "../components/Category";
import ItemCard from "../components/ItemCard";
import OfferCard from "../components/offer-cards";
import COLORS from "../constants/COLOR";
import { useEffect } from "react";

export default function Index() {
  const isLoggin = null;
  const router = useRouter();
  const rootNavitationState = useRootNavigationState();
  const navigatorReady = rootNavitationState?.key !== undefined;
  useEffect(() => {
    if (navigatorReady) {
      if (isLoggin == null) {
        router.replace("/(auth)/sign-up");
      }
    }
  }, [navigatorReady, isLoggin]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../../assets/images/extra-small-logo.png")}
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
            <Text style={styles.searchBtn}>Search</Text>
          </View>
          {/* Categories */}
          <View style={styles.categoryContainer}>
            <Category
              img={require("../../assets/images/fruit.png")}
              title="Fruits"
            />
            <Category
              img={require("../../assets/images/vegetable.png")}
              title="Vegetables"
            />
            <Category
              img={require("../../assets/images/diary.png")}
              title="Dairy"
            />
            <Category
              img={require("../../assets/images/see-all.png")}
              title="See All"
            />
          </View>
          {/* Offer Cards */}
          <View style={styles.offerContainer}>
            <Text style={styles.sectionHeading}>Exclusive Offers for You</Text>
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
            </ScrollView>
          </View>

          {/* Top Picks */}
          <View style={styles.topPicksContainer}>
            <Text style={styles.sectionHeading}>
              Daily Essentials at Your Fingertips
            </Text>
            <View style={styles.gridContainer}>
              <ItemCard
                name={"Potato"}
                price={20}
                image={
                  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <ItemCard
                name={"Tomato"}
                price={60}
                image={
                  "https://plus.unsplash.com/premium_photo-1671395501275-630ae5ea02c4?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <ItemCard
                name={"Paneer"}
                price={60}
                image={
                  "https://imgs.search.brave.com/tP5c6K4pnRfO44WrEUwPB_7CpnQnEPT6lyftyguGAsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXVu/aWthZ293YXJkaGFu/LmNvLnVrL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE0LzAyL0hv/dy10by1tYWtlLVBh/bmVlcjEtMTAyNHg2/ODMuanBn"
                }
              />
              <ItemCard
                name={"Onion"}
                price={30}
                image={
                  "https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// >> Styles___________________
const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20, // Ensure spacing at the bottom for scroll
  },
  container: {
    backgroundColor: COLORS.primary,
  },
  imgContainer: {
    // padding: ,
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
    paddingVertical: 4,
    top: 3,
    fontWeight: "bold",
    fontSize: 18,
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
  sectionHeading: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: COLORS.secondary,
  },
  topPicksContainer: {
    backgroundColor: COLORS.white,
    padding: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
