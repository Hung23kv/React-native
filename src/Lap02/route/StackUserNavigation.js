import { createStackNavigator } from "@react-navigation/stack"
import { Icon } from "react-native-paper";
import User from "../Screen/User";
import Options from "../Screen/Options";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const StackUserNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="user" component={User} />
            <Stack.Screen name="Options" component={Options} />
        </Stack.Navigator>
    )
}

export default StackUserNavigation;