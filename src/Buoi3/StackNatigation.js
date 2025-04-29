import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Regester from './regesters';
import forgotPassWord from './forgotPassWord';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Regesters" component={Regester} />
                <Stack.Screen name="ForgotPassWord" component={forgotPassWord} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;