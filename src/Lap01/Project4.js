import React,{useState} from "react";
import { Button, Text, View } from "react-native";
export default () => {
    const[pressCount,setpressCount] = useState(0);
    return(
        <View>
            <Text style={{textAlign:'center',marginBottom:20}}>You've pressed the button: {pressCount} time(s)</Text>
            <Button
                 title = {`Pressed ${pressCount} time (s)`}
                 onPress={() => setpressCount(pressCount + 1)}
            >
            </Button>
        </View>
    )
}