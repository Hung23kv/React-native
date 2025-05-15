import { createStackNavigator } from "@react-navigation/stack"
import LoginForm from "../screens/Login"
import Registerform from "../screens/Register"
import Admin from "../screens/Admin"
import CustomerHome from '../User/Screens/CustomerHome'
import BookingScreen from "../User/Screens/BookingSreens"

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
            <Stack.Screen name="Customer" component={CustomerHome}/>
            <Stack.Screen name="Booking" component={BookingScreen}/>
        </Stack.Navigator>
    )
}

export default Route