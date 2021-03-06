import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Button } from "react-native-elements";
import { users } from "../../utils/dummyData/users";

const DatePicker = ({ date, setDate }) => {
  const user = users[0];
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentDate) => {
    setShow(true);
    setMode(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: 10 }}>
          <Button title="Chọn ngày" onPress={() => showMode("date")} />
        </View>
        <View>
          <Button title="Chọn giờ" onPress={() => showMode("time")} />
        </View>
      </View>
      {show ? (
        <DateTimePicker
          testID="datetimePicker"
          value={date}
          mode={mode}
          is24Hours={true}
          display="default"
          onChange={onChange}
        />
      ) : null}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
