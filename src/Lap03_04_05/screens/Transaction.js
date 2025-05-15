import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { View, FlatList } from "react-native";
import { Appbar, List, Text } from "react-native-paper";

const Transaction = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const bookingsRef = firestore().collection('Bookings');

    useEffect(() => {
    const bookingsRef = firestore().collection('Bookings');
    const unsubscribe = bookingsRef.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
            const { username, serviceName, datetime, status } = doc.data();
            list.push({
                id: doc.id,
                username,
                serviceName,
                datetime,
                status,
            });
        });
        setBookings(list);
        if (loading) setLoading(false);
        });
        return () => unsubscribe();
    }, [loading]); 


    const toggleStatus = async (id, currentStatus) => {
        await bookingsRef.doc(id).update({ status: !currentStatus });
    };

    if (loading) return null;

    const renderItem = ({ item }) => (
        <List.Item
            title={`${item.username} - ${item.serviceName}`}
            description={`Date: ${new Date(item.datetime).toLocaleString()}`}
            onPress={() => toggleStatus(item.id, item.status)}
            left={props => (
                <List.Icon {...props} icon={item.status ? "check-circle" : "clock"} />
            )}
        />
    );

    return (
        <View style={{ flex: 1 }}>
            <Appbar style={{ backgroundColor: 'blue' }}>
                <Appbar.Content title="Transactions" />
            </Appbar>
            <FlatList
                data={bookings}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Transaction;