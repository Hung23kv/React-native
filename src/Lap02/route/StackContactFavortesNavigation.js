import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screen/Profile";
import Favorites from "../Screen/Favorites";

const Stack = createStackNavigator();
const StackContactFavoritesNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="My Favorites" component={Favorites} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default StackContactFavoritesNavigation;