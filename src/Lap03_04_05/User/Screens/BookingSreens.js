import React, { useState } from "react";
import { View, Platform, Alert } from "react-native";
import { Text, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import firestore from "@react-native-firebase/firestore";
import { useMyContextController } from "../../store";

const BookingScreen = ({ route, navigation }) => {
  const { Detail } = route.params;
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [controller] = useMyContextController();
  const { userLogin } = controller;

  const handleBooking = async () => {
    try {
      const combinedDateTime = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedDateTime.getHours(),
        selectedDateTime.getMinutes()
      );

      await firestore().collection("Bookings").add({
        serviceName: Detail.ServiceName,
        datetime: combinedDateTime.toISOString(),
        status: false,
        username: userLogin.fullName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert("Thành công", "Đã đặt lịch dịch vụ!");
      navigation.goBack();
    } catch (error) {
      console.error("Lỗi khi đặt lịch:", error);
      Alert.alert("Lỗi", "Không thể đặt lịch.");
    }
  };

  const onChangeTime = (event, time) => {
    setShowTimePicker(Platform.OS === "ios");
    if (time) {
      const updatedDateTime = new Date(selectedDateTime);
      updatedDateTime.setHours(time.getHours());
      updatedDateTime.setMinutes(time.getMinutes());
      setSelectedDateTime(updatedDateTime);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ textAlign: "center", color: "black", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        BOOKING
      </Text>

      <Text variant="titleMedium">Dịch vụ: {Detail.ServiceName}</Text>
      <Text>Giá: {Number(Detail.Price).toLocaleString()} đ</Text>

      <Text style={{ marginTop: 20 }}>Ngày đã chọn: {selectedDate.toLocaleDateString()}</Text>
      <Text>
        Giờ đã chọn: {selectedDateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </Text>

      <Button
        mode="outlined"
        onPress={() => setShowPicker(true)}
        style={{ marginTop: 10 }}
      >
        Chọn ngày
      </Button>

      <Button
        mode="outlined"
        onPress={() => setShowTimePicker(true)}
        style={{ marginTop: 10 }}
      >
        Chọn giờ
      </Button>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          minimumDate={new Date()}
          onChange={(event, date) => {
            setShowPicker(Platform.OS === "ios");
            if (date) setSelectedDate(date);
            if (Platform.OS === "android") setShowPicker(false);
          }}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChangeTime}
        />
      )}

      <Button
        mode="contained"
        onPress={handleBooking}
        style={{ marginTop: 30 }}
      >
        Xác nhận đặt lịch
      </Button>
    </View>
  );
};

export default BookingScreen;