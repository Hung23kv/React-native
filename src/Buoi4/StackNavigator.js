import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DetailScreen from './Detail';
import HomeScreen from './Home';
import CustomNavigationBar from './CustomNavigation';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"
                    ScreenOptions={{
                        header: (props) => <CustomNavigationBar {...props} />,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default StackNavigator;