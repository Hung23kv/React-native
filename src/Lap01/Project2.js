import React from "react";
import {StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "react-native";
import { Text } from "react-native-paper";
export default () => {
    return(
        <View style = {mystyle.container}>
            <Button title="Button 1 " onPress={ () => alert("hello !")}></Button>
            <TouchableOpacity style = {mystyle.button} onPress={ () => alert("Hello 2")}>
                <Text style={mystyle.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
};

const mystyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
        },
        button:{
            backgroundColor:'blue',
            marginTop: 10,
            alignItems:'center',
            padding:10,
        },
        text:{
            color:'white',
            fontSize:18,
        }
    }
)