import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-paper";
import StackContactNavigation from "./StackContactNavigation";
import StackContactFavoritesNavigation from "./StackContactFavortesNavigation";
import StackUserNavigation from "./StackUserNavigation";

const Drawer = createDrawerNavigator();

const getDrawerIcon = (iconname) => {
    return ({ color, size }) => (
        <Icon 
            source={iconname} 
            size={size} 
            color={color} 
        />
    );
};

const Drawernavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Contacts">
            <Drawer.Screen 
                name="Contacts" 
                component={StackContactNavigation} 
                options={{
                    drawerIcon: getDrawerIcon('home')
                }}
            />
            <Drawer.Screen 
                name="Favorites" 
                component={StackContactFavoritesNavigation}
                options={{
                    drawerIcon: getDrawerIcon('heart')
                }}
            />
            <Drawer.Screen 
                name="Me" 
                component={StackUserNavigation}
                options={{
                    drawerIcon: getDrawerIcon('account')
                }}
            />
        </Drawer.Navigator>
    );
};

export default Drawernavigation;