import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import { Icon } from 'react-native-paper';
import Profile from './Profile';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name ="Home" component={HomeScreen}
                options={{
                    tabBarIcon: (props) => <Icon source={"home"} {...props} />
                }}
            />
            <Tab.Screen name ="Profile" component={Profile}
                options={{
                    tabBarIcon: (props) => <Icon source={"account"} {...props} />
                }}
            />
            <Tab.Screen name ="Logout" component={Logout}
                options={{
                    tabBarIcon: (props) => <Icon source={"logout"} {...props} />
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>        
    )
};

export default BottomTabNavigator;