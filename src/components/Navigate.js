/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Hall from './Hall';
import Dining from './Dining';
import Kitchen from './Kitchen';
import MasterBedRoom from './MasterBedroom';
import ChildrenBedRoom from './ChildrenBedroom';
import GuestRoom from './Guestroom';

const RootStack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }} />
                <RootStack.Screen
                    name="Hall"
                    component={Hall}
                    options={{ headerShown: true, headerBackButtonMenuEnabled: true }} />
                <RootStack.Screen
                    name="Dining"
                    component={Dining}
                    options={{ headerShown: true, headerBackButtonMenuEnabled: true }} />
                <RootStack.Screen
                    name="Kitchen"
                    component={Kitchen}
                    options={{ headerShown: true, headerBackButtonMenuEnabled: true }} />
                <RootStack.Screen
                    name="Master Bedroom"
                    component={MasterBedRoom}
                    options={{ headerShown: true, headerBackButtonMenuEnabled: true }} />
                <RootStack.Screen
                    name="Children Bedroom"
                    component={ChildrenBedRoom}
                    options={{ headerShown: true, headerBackButtonMenuEnabled: true }} />
                <RootStack.Screen
                    name="Guest Room"
                    component={GuestRoom}
                    options={{ headerShown: true, headerBackButtonMenuEnabled: true }} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigate;