import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "../Sreens/Cart";
import StackRoute from "../Route/Stack"

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (  
            <Drawer.Navigator
            >
                <Drawer.Screen name="Cuisines" component={StackRoute} />
                <Drawer.Screen name="Cart" component={Cart} />
            </Drawer.Navigator>
    );
}
export default MyDrawer;