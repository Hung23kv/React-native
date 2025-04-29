import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawerBar from "./DrawerNavigator"
import Home from "./Home";
import Profile from "./Profile";
import setting from "./Set";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => 
                    <CustomDrawerBar {...props} />
                }
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Setting" component={setting} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;