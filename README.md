
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Seat({ number, booked, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.seat, { backgroundColor: booked ? "red" : "green" }]}
      onPress={onPress}
    >
      <Text style={styles.seatText}>{number}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  seat: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  seatText: {
    color: "white",
    fontWeight: "bold",
  },
});
