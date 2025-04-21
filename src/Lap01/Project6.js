import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
const Square = ({ text , bgColor = "#7ce0f9"}) => (
    <View style={[styles.box,{backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    box: {
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
})

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

export default () => {
    return(
        <ScrollView style = {styles.container}>
            {data.map((item,index) =>(
                <Square key={item} text={`Square ${index + 1}`}></Square>
            ))}
        </ScrollView>
    )
}