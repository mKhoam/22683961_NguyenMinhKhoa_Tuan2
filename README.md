# 22683961_NguyenMinhKhoa_Tuan2

export default function App() {
  const [bookedSeats, setBookedSeats] = useState([]); // lưu danh sách ghế đã đặt
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) {
      setBookedSeats(bookedSeats.filter((s) => s !== seat)); // hủy đặt
    } else {
      setBookedSeats([...bookedSeats, seat]); // đặt chỗ
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screenText}>MÀN HÌNH</Text>
      </View>

      <View style={styles.seatsContainer}>
        {seats.map((seat) => (
          <TouchableOpacity
            key={seat}
            style={[
              styles.seat,
              { backgroundColor: bookedSeats.includes(seat) ? "red" : "green" },
            ]}
            onPress={() => toggleSeat(seat)}
          >
            <Text style={styles.seatText}>{seat}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
