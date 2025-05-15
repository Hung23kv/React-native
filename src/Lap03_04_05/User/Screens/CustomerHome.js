import { View } from "react-native";
import { Text } from "react-native-paper";
import UserService from "../Screens/Services";
import UserProfile from '../Screens/Profiles';
import Appointment from '../Screens/Appointment'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";

const Tab = createBottomTabNavigator()
const CustomerHome = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Service" component={UserService}
                options={{
                    title:"Home",
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Appointment" component={Appointment}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="cash" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Profiles" component={UserProfile}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="account" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default CustomerHome;