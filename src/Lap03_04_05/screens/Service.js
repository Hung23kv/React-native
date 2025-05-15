import React from "react";
import { Image,View,FlatList } from "react-native";
import { Text,FAB } from "react-native-paper";
import fireStore from "@react-native-firebase/firestore";
import ItemService from "./ItemService";

const Service = ({navigation}) => {
    const [services, setServices] = React.useState([]);
    React.useEffect(() => {
        const unsubscribe = fireStore()
            .collection("Sevices")
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setServices(data);
            });
        return () => unsubscribe();
    }, []);
    return(
        <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
                <Image source={require("../../../images/logolab3.png")} style={{ width: 150, height: 100 }} resizeMode="contain" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 16, marginTop: 8, marginBottom: 4 }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', flex: 1 }}>Danh sách dịch vụ</Text>
                <FAB
                    icon="plus"
                    size="small"
                    style={{
                        backgroundColor: '#FF6B81',
                    }}
                    color="white"
                    onPress={() => navigation.navigate('AddNewService')}
                />
            </View>
            <FlatList
                data={services}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemService
                        id={item.id}
                        ServiceName={item.ServiceName}
                        Price={item.Price}
                        onUpdate={(id) => navigation.navigate('UpdateService', { id })}
                        onDetail={(id) => navigation.navigate('DetailService', { id })}
                    />
                )}
                contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 16 }}
                style={{ marginTop: 0 }}
            />
        </View>
    )
}

export default Service;