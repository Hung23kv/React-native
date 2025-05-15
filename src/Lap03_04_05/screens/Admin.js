

import RouterService from "../routers/RouteServices";
import Transaction from "./Transaction";
import Customer from "./Customers";
import Setting from "./SettingAd";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";

const Tab = createBottomTabNavigator()

const Admin = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="RouterService" component={RouterService}
                options={{
                    title:"Home",
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Transaction" component={Transaction}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="cash" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Customer" component={Customer}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="account" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconButton icon="cog" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Admin;