import React from "react";
import { StyleSheet, Text, View,FlatList,ActivityIndicator } from "react-native";
import { fetchContacts } from "../utility/api";
import ContactListItem  from "../components/ContactListItem";

const keyExtractor = ({phone}) => phone;

const Contacts = ({navigation}) => {
    const  [contacts, setContacts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    React.useEffect(() => {
        fetchContacts()
            .then((contacts) => {
                setContacts(contacts);
                setLoading(false);
                setError(false);
            })
            .catch((e) => {
                console.log(e);
                setError(true);
                setLoading(false);
            });
    },[])

    const conttactSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
    const renderContact = ({ item }) => {      
        return (
            <ContactListItem
                name={item.name}
                avatar={item.picture}
                phone={item.phone}
                onPress={() => navigation.navigate("ContactDetail", { contact: item })}
            />
        );
    };
    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="blue" />}
            {error && <Text>Error loading contacts</Text>}
            {!loading && !error && (
                <FlatList
                    data={conttactSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}
                />
            )}
            {!loading && !error && contacts.length === 0 && (
                <Text>No contacts found</Text>
            )}
        </View>
    );
};
export default Contacts;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
    }
});