import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function BottomTab() {

    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" size={size} color={color} />
                ),
            }} />

            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                headerShown: false,
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
}
