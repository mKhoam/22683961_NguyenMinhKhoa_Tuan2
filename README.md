# 22683961_NguyenMinhKhoa_Tuan2
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Màn hình lớn */}
      <View style={styles.screen}>
        <Text style={styles.screenText}>MÀN HÌNH</Text>
      </View>

      {/* Ghế ngồi */}
      <View style={styles.seatsContainer}>
        {seats.map((seat) => (
          <TouchableOpacity key={seat} style={styles.seat}>
            <Text style={styles.seatText}>{seat}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  screen: {
    backgroundColor: "#ccc",
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 5,
  },
  screenText: {
    fontWeight: "bold",
  },
  seatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  seat: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  seatText: {
    color: "white",
    fontWeight: "bold",
  },
});
