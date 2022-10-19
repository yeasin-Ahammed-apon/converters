import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Money = () => {
  const [dollar, setDollar] = useState(0);
  const [taka, setTaka] = useState(0);

  function onChangeK(e) {
    const value = parseFloat(e);
    const c = value * 105;
    setTaka(c);
  }

  function onChangeM(e) {
    const value = parseFloat(e);
    const f = value / 105;
    setDollar(f);
  }
  return (
    <View>
      <Text style={styles.heading}>
        taka
        <Text style={styles.heading2}> {taka ? taka : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeK}
        value={dollar}
        placeholder="dollar value"
        keyboardType="numeric"
      />
      <Text style={styles.heading}>
        dollar
        <Text style={styles.heading2}> {dollar ? dollar : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeM}
        value={taka}
        placeholder="taka value"
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
    borderColor: "#47bfff",
    borderWidth: 5,
    padding: 10,
    fontSize: 20,
    margin: 10,
  },
});

export default Money;
