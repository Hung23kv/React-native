import React, { useEffect, useState,useCallback } from "react";
import { View, Alert } from "react-native";
import { Text, Menu, IconButton } from "react-native-paper";
import fireStore from "@react-native-firebase/firestore";

const DetailService = ({ route, navigation }) => {
    const { id } = route.params;
    const [service, setService] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const doc = await fireStore().collection("Sevices").doc(id).get();
            if (doc.exists) setService(doc.data());
        };
        fetchData();
    }, [id]);

    // Format Firestore timestamp to string
    const formatDate = (timestamp) => {
        if (!timestamp) return "";
        const date = timestamp.toDate();
        return `${date.getDate().toString().padStart(2, "0")}/${
            (date.getMonth() + 1).toString().padStart(2, "0")
        }/${date.getFullYear()} ${date.getHours().toString().padStart(2, "0")}:${
            date.getMinutes().toString().padStart(2, "0")
        }:${date.getSeconds().toString().padStart(2, "0")}`;
    };

    const handleDelete = useCallback(() => {
        setMenuVisible(false);
        Alert.alert(
            "Warning",
            "Are you sure want to remove this service ? This operation cannot be returned",
            [
                { text: "CANCEL", style: "cancel" },
                {
                    text: "DELETE",
                    style: "destructive",
                    onPress: async () => {
                        await fireStore().collection("Sevices").doc(id).delete();
                        navigation.goBack();
                    }
                }
            ]
        );
    }, [id, navigation]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Menu
                    visible={menuVisible}
                    onDismiss={() => setMenuVisible(false)}
                    anchor={
                        <IconButton
                            icon="dots-vertical"
                            onPress={() => setMenuVisible(true)}
                            iconColor="white"
                        />
                    }
                >
                    <Menu.Item onPress={handleDelete} title="Xóa" />
                </Menu>
            ),
            title: "Service detail"
        });
    }, [navigation, menuVisible,handleDelete]);

    if (!service) return null;

    return (
        <View style={{ backgroundColor: "#fff", flex: 1, padding: 16 }}>
            <Text>
                <Text style={{ fontWeight: "bold" }}>Service name: </Text>
                {service.ServiceName}
            </Text>
            <Text>
                <Text style={{ fontWeight: "bold" }}>Price: </Text>
                {Number(service.Price).toLocaleString()} đ
            </Text>
            <Text>
                <Text style={{ fontWeight: "bold" }}>Creator: </Text>
                {service.Creator}
            </Text>
            <Text>
                <Text style={{ fontWeight: "bold" }}>Time: </Text>
                {formatDate(service.Time)}
            </Text>
            <Text>
                <Text style={{ fontWeight: "bold" }}>Final update: </Text>
                {formatDate(service.FinalUpdate)}
            </Text>
        </View>
    );
};

export default DetailService;