import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, List } from "react-native-paper";
import fireStore from "@react-native-firebase/firestore";

const Customer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const snapshot = await fireStore()
                .collection("Users")
                .where("role", "==", "customer")
                .get();

            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setCustomers(data);
        };

        fetchCustomers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Danh sách khách hàng</Text>
            <FlatList
                data={customers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.fullName}
                        description={item.email}
                        left={props => <List.Icon {...props} icon="account" />}
                    />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default Customer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 16,
    },
});