import React from "react";
import { Button, View, StyleSheet,Text } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={styles.heading}>Converters</Text>      
      <View style={styles.button}>
        <Button
          color={styles.button.backgroundColor}          
          title="Temperature"
          onPress={() => navigation.navigate("Temperature")}
        />
      </View>
      <View style={styles.button}>
        <Button
          color={styles.button.backgroundColor}
          title="Length"
          onPress={() => navigation.navigate("Length")}
        />
      </View>
      <View style={styles.button}>
        <Button
          color={styles.button.backgroundColor}
          title="Money"
          onPress={() => navigation.navigate("Money")}
        />
      </View>
      <View style={styles.button}>
        <Button
          color={styles.button.backgroundColor}
          title="Height"
          onPress={() => navigation.navigate("Height")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    fontSize: 50,
    paddingTop: 20,
    textAlign: "center",
    color: "lightblue",
    backgroundColor: "red",
    margin: 10,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 30,
    paddingTop: 10,
    textAlign: "center",
    color: "black",
  },
});
export default HomeScreen;
