import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Length = () => {
  const [kilometer, setKilometer] = useState(0);
  const [meter, setMeter] = useState(0);

  function onChangeK(e) {
    const value = parseFloat(e);
    const c = value * 1000;
    setMeter(c);
  }

  function onChangeM(e) {
    const value = parseFloat(e);
    const f = value / 1000;
    setKilometer(f);
  }
  return (
    <View>
      <Text style={styles.heading}>
        meter
        <Text style={styles.heading2}> {meter ? meter : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeK}
        value={kilometer}
        placeholder="kilometer value"
        keyboardType="numeric"
      />
      <Text style={styles.heading}>
        kilometer
        <Text style={styles.heading2}> {kilometer ? kilometer : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeM}
        value={meter}
        placeholder="meter value"
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
  },
  input: {
    height: 80,
    borderColor: "#e80787",
    borderWidth: 5,
    padding: 10,
    fontSize: 20,
    margin: 10,
  },
});

export default Length;
