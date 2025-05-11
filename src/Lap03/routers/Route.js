import { createStackNavigator } from "@react-navigation/stack"
import LoginForm from "../screens/Login"
import Registerform from "../screens/Register"
import Admin from "../screens/Admin"

const Stack = createStackNavigator()

const Route = () => {
    return(
        <Stack.Navigator
            initialRouteName="Logins"
            screenOptions={{headerShown:false}}
        >
            <Stack.Screen name="Logins" component={LoginForm}/>
            <Stack.Screen name="Registerss" component={Registerform}/>
            <Stack.Screen name="Admins" component={Admin}/>
        </Stack.Navigator>
    )
}

export default Route