import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screen/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen4 from '../screen/Screen4';
import Screen3 from '../screen/Screen3';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Screen1">
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
            <Tab.Screen name='Screen3' component={Screen3} />
            <Tab.Screen name='Screen4' component={Screen4} />
        </Tab.Navigator>
    );
}


export default function MainNavigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})