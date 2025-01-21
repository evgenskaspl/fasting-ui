import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerExample = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select your language:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="cpp" />
      </Picker>
      <Text style={styles.result}>Selected: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PickerExample;
