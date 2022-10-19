import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Height = () => {
  const [foot, setFoot] = useState(0);
  const [inch, setInch] = useState(0);

  function onChangeK(e) {
    const value = parseFloat(e);
    const c = value * 12;
    setInch(c);
  }

  function onChangeM(e) {
    const value = parseFloat(e);
    const f = value / 12;
    setFoot(f);
  }
  return (
    <View>
      <Text style={styles.heading}>
        inch
        <Text style={styles.heading2}> {inch ? inch : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeK}
        value={foot}
        placeholder="foot value"
        keyboardType="numeric"
      />
      <Text style={styles.heading}>
        foot
        <Text style={styles.heading2}> {foot ? foot : 0}</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeM}
        value={inch}
        placeholder="inch value"
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
    borderColor: "#47b550",
    borderWidth: 5,
    padding: 10,
    fontSize: 20,
    margin: 10,
  },
});

export default Height;
