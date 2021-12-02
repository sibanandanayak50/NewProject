import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home1" component={BottomTab} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}
