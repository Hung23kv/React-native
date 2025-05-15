
import React from "react";
import { View,FlatList } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import fireStore from "@react-native-firebase/firestore"
import ItemService from "./ItemServies";

const Services = ({navigation}) => {
    const [search,setSearch] = React.useState("");
    const [service,setServices] = React.useState();
    const ServiceList = fireStore().collection("Sevices");
    const [filteredServices, setFilteredServices] = React.useState([]);


    React.useEffect(() =>{
        return ServiceList.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc =>{
                const {ServiceName,Price} = doc.data()
                list.push({
                    id:doc.id,
                    ServiceName,
                    Price,
                })
            })
            setServices(list)
        })
    });

    return(
        <View>
            <View style={{alignItems:'center',justifyContent:'center', margin:10}}>
                <Searchbar
                    placeholder="search service"
                    onChangeText={setSearch}
                    value={search}
                />
            </View>
            <View >
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', textAlign:'center' }}>Danh sách dịch vụ</Text>
                <FlatList
                data={service}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemService
                        id={item.id}
                        ServiceName={item.ServiceName}
                        Price={item.Price}
                        onPress={() => navigation.navigate("Booking",{Detail:item})}
                    />
                )}
                contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 16 }}
                style={{ marginTop: 0 }}
            />
            </View>
        </View>
    )
}

export default Services;