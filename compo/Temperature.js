import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Temperature = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function onChangeC(e) {
    const value = parseFloat(e);
    const c = value * (9 / 5) + 32;
    setFahrenheit(c);
  }

  function onChangeF(e) {
    const value = parseFloat(e);
    const f = (value - 32) * (5 / 9);
    setCelsius(f);
  }
  return (
    <View>
      <Text style={styles.heading}>
        fahrenheit 
        <Text style={styles.heading2}> {fahrenheit ? fahrenheit : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeC}
        value={celsius}
        placeholder="celsius value"
        keyboardType="numeric"
      />
      <Text style={styles.heading}>celsius 
            <Text style={styles.heading2}> {celsius ? celsius : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeF}
        value={fahrenheit}
        placeholder="fahrenheit value"
        keyboardType="numeric"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
    color: "black",
  },
  heading2: {
    fontSize: 30,    
  }
  ,
  input: {
    height: 80,
    borderColor: "#f7ef0a",
    borderWidth: 5,
    padding: 10,
    fontSize: 20,
    margin: 10,
  },  
});
export default Temperature;
