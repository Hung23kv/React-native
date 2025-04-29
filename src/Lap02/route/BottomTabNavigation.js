import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../Screen/User";
import { Icon } from "react-native-paper";
import StackContactNavigation from "./StackContactNavigation";
import StackContactFavoritesNavigation from "./StackContactFavortesNavigation";
import StackUserNavigation from "./StackUserNavigation";

const Tab = createBottomTabNavigator();
const BottomTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={StackContactNavigation}a 
                options={{
                    tabBarIcon: (props) => <Icon source={"home"} {...props} />
                }}
            />
            <Tab.Screen name="ListFavorites" component={StackContactFavoritesNavigation}
                options={{
                    tabBarIcon: (props) => <Icon source={"star"} {...props} />
                }}
            />
            <Tab.Screen name="Me" component={StackUserNavigation}
                options={{
                    tabBarIcon: (props) => <Icon source={"account"} {...props} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;