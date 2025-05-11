import React from "react";
import firestore  from "@react-native-firebase/firestore"
import { View,ScrollView, FlatList } from "react-native";
import { Appbar, Button, Text, TextInput } from "react-native-paper";
import Todo from "./Todo";
const  App = () => {
    const ref = firestore().collection('todos');
    const [todo,setTodo] = React.useState('');
    const [todos,setTodos] = React.useState('');
    const [loading,setLoading] = React.useState(true);

    async function addTodo() {
        await ref.add({
            title:todo,
            complete:false,
        });
        setTodo('');
    }

    React.useEffect(() =>{
        return ref.onSnapshot(querySnapshot =>{
            const List = [];
            querySnapshot.forEach(doc => {
                const {title,complete} = doc.data();
                List.push({
                    id:doc.id,
                    title,
                    complete,
                })
            })
            setTodos(List)
            if(loading){
                setLoading(false)
            }
        })
    });
    if(loading){
        return null;
    }
    return (
        <View style={{flex:1}}>
            <Appbar style={{backgroundColor:'blue'}}>
                <Appbar.Content title = {'TODOs List'}/>
            </Appbar>
            <ScrollView style={{flex:1}}>
                <FlatList 
                    style={{flex:1}}
                    data={todos}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Todo {...item}/>}
                />
            </ScrollView>
            <TextInput label={"New todo"} value={todo} onChangeText={(text)=>{setTodo(text)}}/>
            <Button onPress = {addTodo}>Add TODO</Button>
        </View>
    );
}

export default App;