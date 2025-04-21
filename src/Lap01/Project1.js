import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const app = () =>{
    return(
        <View style= {{
            width:100,
            height:100,
            backgroundColor:'aqua',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={{color:'#fff'}}> Hello world !!</Text>
        </View>
    )
}

export default app;