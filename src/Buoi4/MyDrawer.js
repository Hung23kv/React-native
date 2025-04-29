import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerBar from "./CustomDrawerBar"
import Home from "./Home";
import Profile from "./Profile";
import Logout from "./Logout";
import Detail from "./Detail";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (  
            <Drawer.Navigator
                drawerContent={(props) => 
                    <CustomDrawerBar {...props} />
                }
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Logout" component={Logout} />
                <Drawer.Screen name="Detail" component={Detail} 
                    options={{ drawerItemStyle: { display: "none" } }}
                />
            </Drawer.Navigator>
        
    );
}

export default MyDrawer;