import React from "react";
import { StyleSheet, View} from "react-native";
import { Text, TextInput,HelperText,Button } from "react-native-paper";
import { useMyContextController } from "../store";
import fireStore from "@react-native-firebase/firestore";

const AddNewService = () => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [controller,dispatch] =  useMyContextController()
    const {userLogin} = controller
    const hasErourPice = () => {
        return price === "" || isNaN(price) || Number(price) < 0;
    }
    const Service = fireStore().collection("Sevices")
    function addService(){
        Service.add({
        Creator: userLogin.fullName,
        Price: price,
        ServiceName: name,
        Time: fireStore.FieldValue.serverTimestamp(),
        FinalUpdate: fireStore.FieldValue.serverTimestamp()
        });
        setName('');
        setPrice('');
    }
    return(
        <View style={{flex:1}}>
            <View style={myStyle.Card}>
                <Text style={myStyle.CardText}>Services name *</Text>
                <TextInput
                    value={name}
                    placeholder="Input a service name"
                    mode="outlined"
                    outlineColor="#ddd"
                    activeOutlineColor="#FF8C00"
                    style = {myStyle.CardInput}
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
                    style = {myStyle.CardInput}
                    onChangeText={setPrice}
                />
                <HelperText type="error" visible={hasErourPice()}>
                    Chỉ nhận input là số
                </HelperText>
            </View>
            <View style={myStyle.Card}>
                <Button
                mode="contained"
                style={myStyle.AddButton}
                contentStyle={myStyle.AddButtonContent}
                labelStyle={myStyle.AddButtonText}
                onPress={addService}
                >
                Add
                </Button>
            </View>
        </View>
    )
}

export default AddNewService;

const myStyle = StyleSheet.create({
    Card:{
        margin:10,
        padding:10,
    },
    CardText:{
        color:'black',
        fontWeight:'bold',
        marginBottom:8,
    },
    CardInput:{
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
})