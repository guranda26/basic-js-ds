import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import BookImage from "./assets/book.jpeg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>ჩემი წიგნები</Text>
      <Text>ყველას ნახვა</Text>

      <Button
        title="plus"
        style={{ width: "10%", height: "10%", backgroundColor: "red" }}
      />
      <View>
        <Image style={styles.image} source={BookImage} contentFit="cover" />
        <View style={styles.border}>
          <Text style={{ color: "#fff" }}>მერვე სიცოცხლე (ბრილკას)</Text>
          <Text style={{ color: "#fff", marginTop: 8 }}>0%</Text>
          <View
            style={{
              width: 20,
              height: 2,
              borderRadius: 1,
              color: "#fff",
              margin: 0,
            }}
          ></View>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>წაიკითხე უფასოდ</Text>
        <Text style={styles.text}>Saba Reader-ში</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "auto",
    height: 400,
    borderTopRadius: 12,
    marginBottom: 10,
  },
  border: {
    width: "auto",
    height: 100,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#3b4352",
    marginBotto: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
  },
  box: {
    marginTop: 20,
    width: "80%",
    height: 150,
    backgroundColor: "#40ded6",
    borderRadius: 20,
  },
  text: {
    fontSize: "20",
    color: "#fff",
    textAlign: "center",
  },
});
