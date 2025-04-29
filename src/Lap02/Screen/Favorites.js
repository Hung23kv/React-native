import React from 'react';
import { useEffect } from "react";
import { View,useState,Text, FlatList, TouchableOpacity } from "react-native";
import { fetchContacts } from "../utility/api";
import { ActivityIndicator, Avatar } from "react-native-paper";

const Favorites = ({navigation}) =>{
    const [contacts,setContacts] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    useEffect(() => {
        fetchContacts().then(data => {setContacts(data)
            setLoading(false)
            setError(false)})
    },[]);

    const favorties = contacts.filter(contact => contact.favorite);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("ContactDetail", { contact: item })}>
                <Avatar.Image source={{uri:item.picture}}
                style={{margin:30}}
                size={150}
            />
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ flex: 1, }}>
            {loading && <ActivityIndicator/>}
            <FlatList
               data={favorties}
               keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={3}
            />
        </View>
    );
};

export default Favorites;