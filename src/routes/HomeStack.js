import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerTab from './DrawerTab';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerTab" component={DrawerTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}