
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Seat from "./Seat"; // import component Seat

export default function App() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) {
      setBookedSeats(bookedSeats.filter((s) => s !== seat));
    } else {
      setBookedSeats([...bookedSeats, seat]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screenText}>MÀN HÌNH</Text>
      </View>

      <View style={styles.seatsContainer}>
        {seats.map((seat) => (
          <Seat
            key={seat}
            number={seat}
            booked={bookedSeats.includes(seat)}
            onPress={() => toggleSeat(seat)}
          />
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
});
