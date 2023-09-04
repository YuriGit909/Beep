import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import TabRoutes from './Tab.routes';
import StackRoutes from './Stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
    <Drawer.Navigator screenOptions={{ title: ' ' }}>
    <Drawer.Screen
        name="Menu"
        component={TabRoutes}
        options={{
        drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        drawerLabel: 'Menu',
        }}
        />

    <Drawer.Screen
        name="Profile"
        component={StackRoutes}
        options={{
        drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
        drawerLabel: 'Meu Perfil',
        }}
    />
    </Drawer.Navigator>
);
}