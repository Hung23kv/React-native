import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import colors from "../utility/color";
const ContactListItem = ({ name,avatar,phone, onPress }) => {
    return (
        <TouchableHighlight
            underlayColor={colors.gray}
            style = {styles.container}
            onPress={onPress}
        >
                <View style={styles.ContactInfo}>
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                    <View style={styles.details}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{phone}</Text>
                    </View>
                </View>
        </TouchableHighlight>
    );
}
export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};
const styles = StyleSheet.create({
   container:{
    paddingLeft:24,
   },
   ContactInfo:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    paddingTop:16,
    paddingBottom:16,
    paddingRight:24,
    borderBottomColor:colors.gray,
    borderBottomWidth:StyleSheet.hairlineWidth,
   },
    avatar:{
     width:64,
     height:64,
     borderRadius:32,
    },
    details:{
        flex:1,
        marginLeft:20,
        justifyContent:"center",
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.black,
    },
    subtitle:{
        fontSize:15,
        color:colors.blue,
        marginTop:4,
    },
});
    