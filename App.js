import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './app/screens/Profile'
import Contact from './app/screens/Contact'
import Interest from './app/screens/Interest'
import Projects from './app/screens/Projects'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ backgroundColor: '#FFFFFF', }]
      }}>
        <Tab.Screen options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => {
            const image = focused
              ? require('./app/assets/person-focus.png')
              : require('./app/assets/person.png'); return <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={image} />
          }
        }} name="Profile" component={Profile} />
        <Tab.Screen options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => {
            const image = focused
              ? require('./app/assets/project-focus.png')
              : require('./app/assets/project.png'); return <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={image} />
          }
        }} name="Interest" component={Interest} />

        <Tab.Screen options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => {
            const image = focused
              ? require('./app/assets/interest-focus.png')
              : require('./app/assets/interest.png'); return <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={image} />
          }
        }} name="Projects" component={Projects} />

        <Tab.Screen options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => {
            const image = focused
              ? require('./app/assets/contact-focus.png')
              : require('./app/assets/contact.png'); return <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={image} />
          }
        }} name="Contact" component={Contact} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}