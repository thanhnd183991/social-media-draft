import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { users } from "../../utils/dummyData/users";
import { ItemUser } from "../../components";
import {
  NotificationRoute,
  ProfileRoute,
  CreateCalendarRoute,
  ListCalendarRoute,
} from "../../constants/PathRoutes";

const CalendarScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("TA");
  const handleSendRequestUser = () => {
    navigation.navigate(CreateCalendarRoute);
  };

  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", marginVertical: 10, marginBottom: 20 }}
      >
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 40,
            width: 250,
            borderWidth: 1,
            backgroundColor: "lightgray",
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Teaching Assistant" value="TA" />
          <Picker.Item label="Examination Assistant" value="EA" />
          <Picker.Item label="Labor Assistant" value="LA" />
          <Picker.Item label="Psychological Assistant" value="PA" />
          <Picker.Item label="CSKH" value="CSKH" />
        </Picker>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
        Danh sách:
      </Text>
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <ItemUser
              user={item}
              handleClick={() => navigation.push(ProfileRoute)}
              handleSendRequestUser={handleSendRequestUser}
              type="calendar"
            />
          )}
          keyExtractor={(item, index) => index}
          // extraData={selectedId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF5F1",
  },
});

export default CalendarScreen;
