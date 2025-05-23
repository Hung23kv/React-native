import firestore from "@react-native-firebase/firestore"
import { List } from "react-native-paper";

const Todo = ({id,title,complete}) => {
    async function toggleComplete(){
        await firestore()
            .collection('todos')
            .doc(id)
            .update({complete:!complete});
    }
    return(
        <List.Item
            title = {title}
            onPress = {()=> toggleComplete()}
            left={props => (
                <List.Icon {...props} icon={complete ? 'check' : 'cancel'}/>
            )}
        >
        </List.Item>
    );
}
export default Todo;