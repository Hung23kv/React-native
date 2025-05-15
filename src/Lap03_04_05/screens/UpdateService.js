import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, HelperText, Button } from "react-native-paper";
import { useMyContextController } from "../store";
import fireStore from "@react-native-firebase/firestore";

const UpdateServices = ({ route, navigation }) => {
    const { id } = route.params;
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [controller, dispatch] = useMyContextController();
    const { userLogin } = controller;

    useEffect(() => {
        const fetchData = async () => {
            const doc = await fireStore().collection("Sevices").doc(id).get();
            if (doc.exists) {
                const data = doc.data();
                setName(data.ServiceName || "");
                setPrice(data.Price ? String(data.Price) : "");
            }
        };
        fetchData();
    }, [id]);

    const handlePriceChange = (text) => {
        const numericText = text.replace(/[^0-9]/g, "");
        setPrice(numericText);
    };

    const hasErrorPrice = () => {
        return price === "" || isNaN(price) || Number(price) < 0;
    };

    const updateService = async () => {
        await fireStore().collection("Sevices").doc(id).update({
            Creator:userLogin.fullName,
            ServiceName: name,
            Price: price,
            FinalUpdate: fireStore.FieldValue.serverTimestamp(),
        });
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={myStyle.Card}>
                <Text style={myStyle.CardText}>Services name *</Text>
                <TextInput
                    value={name}
                    placeholder="Input a service name"
                    mode="outlined"
                    outlineColor="#ddd"
                    activeOutlineColor="#FF8C00"
                    style={myStyle.CardInput}
                    onChangeText={setName}
                />
            </View>
            <View style={myStyle.Card}>
                <Text style={myStyle.CardText}>Price *</Text>
                <TextInput
                    value={price}
                    placeholder="0"
                    mode="outlined"
                    outlineColor="#ddd"
                    activeOutlineColor="#FF8C00"
                    style={myStyle.CardInput}
                    onChangeText={handlePriceChange}
                    keyboardType="numeric"
                />
                <HelperText type="error" visible={hasErrorPrice()}>
                    Chỉ nhận input là số
                </HelperText>
            </View>
            <View style={myStyle.Card}>
                <Button
                    mode="contained"
                    style={myStyle.AddButton}
                    contentStyle={myStyle.AddButtonContent}
                    labelStyle={myStyle.AddButtonText}
                    onPress={updateService}
                    disabled={name === "" || hasErrorPrice()}
                >
                    Update
                </Button>
            </View>
        </View>
    );
};

export default UpdateServices;

const myStyle = StyleSheet.create({
    Card: {
        margin: 10,
        padding: 10,
    },
    CardText: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    CardInput: {
        width: "100%",
        backgroundColor: "#C0C0C0",
    },
    AddButton: {
        width: "100%",
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "#FF3366",
        borderRadius: 8,
    },
    AddButtonContent: {
        height: 50,
    },
    AddButtonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});