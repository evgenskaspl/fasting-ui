import React from "react";
import { StyleSheet } from "react-native";
import { List, PickerView } from "@ant-design/react-native";

const basicColumns = [
  [
    { label: "120", value: 120 },
    { label: "121", value: 121 },
    { label: "122", value: 123 },
    { label: "123", value: 124 },
    { label: "124", value: 125 },
  ],
  [
    { label: "сm", value: "cm" },
    { label: "inch", value: "inch" },
  ],
];

const Alarm = () => {
  return (
    <List style={styles.container} renderHeader={"Title"}>
      <PickerView
        style={styles.fullWidthElement}
        data={basicColumns}
        cascade={false}
      />
    </List>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  fullWidthElement: {
    width: "100%",
  },
});

export default Alarm;
