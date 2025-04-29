
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Text,Icon } from 'react-native-paper';

const User = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Me</Text>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Options")}>
                        <Icon source="cog" size={36} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,backgroundColor:'#33CCFF',justifyContent:'center',alignItems:'center'}}>
                <Avatar.Image source={require('../../../assets/avatar.jpg')} size={150}/>
                <Text style={{margin:15,color:'#ffffff',fontSize:24,fontWeight: 'bold'}}>Trịnh Quốc Hùng</Text>
                <Text style={{margin:10,color:'#ffffff',fontSize:24,fontWeight: 'bold'}}>2124802010377</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'blue',
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        position: 'absolute',
        right: 15,
    }
});

export default User;