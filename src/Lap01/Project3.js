import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

const MyComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ alignItems:'center',marginBottom:20 }}>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 10 }}
          onPress={ () => Alert.alert("Say Hello") }
        >
          <Text style={{ textAlign: 'center', color: 'white' }}>Say Hello</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems:'center' }}>
            <TouchableOpacity
            style={{ backgroundColor: 'green', padding: 10 }}
            onPress={() => alert("Say goodbye")}
        >
            <Text style={{ textAlign: 'center', color: 'white' }}>Say Goodbye</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyComponent;