import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//screens
import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";


const tab = createBottomTabNavigator();

function MyTabs()
{
    return (
        <tab.Navigator
        initialRouteName="Home"
        screenOptions={{tabBarActiveTintColor:'green'}}
        >
           <tab.Screen 
           name="Home" 
           component={HomeScreen}
           options={{
            tabBarIcon:({color,size}) =>(
                <MaterialCommunityIcons name="home-circle" size={30} color="green" />
            )

           }}
           />
            <tab.Screen 
            name="Settings"
             component={SettingsScreen}
             options={{
                tabBarIcon:({color,size}) =>(
                    <MaterialCommunityIcons name="account-group" size={24} color="black" />
                )
    
               }}
             />
        </tab.Navigator>
    );
}

export default function Navigation()
{
    return(
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
    );
}