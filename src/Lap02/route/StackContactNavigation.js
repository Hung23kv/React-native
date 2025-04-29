import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../Screen/Contact";
import Profile from "../Screen/Profile";

const Stack = createStackNavigator();
const StackContactNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="ContactDetail" component={Profile} />
        </Stack.Navigator>
    )
}

export default StackContactNavigation;