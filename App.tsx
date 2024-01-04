import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Vocab from './Pages/Vocab';
import {Appbar} from 'react-native-paper';
import PhrasalVerbs from './Pages/Phrasal Verbs';
import Idioms from './Pages/Idioms';
import OneWords from './Pages/OneWords';

const Tab = createBottomTabNavigator();


export default function MyComponent() {

  const [title,setTitle] = useState('Vocab')

  return (
    <>
    {/* <Appbar.Header style={{backgroundColor:'#CBC3E3'}}>
    <Appbar.Content title={title} />
  </Appbar.Header> */}
    <Tab.Navigator
       screenOptions={{ headerStyle: { backgroundColor: '#0e1b37ff' },headerTitleStyle:{color:"white"} }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      {/* <Tab.Screen
        name="Vocab"
        component={Vocab}
        listeners={{
          tabPress:e=>{
            setTitle('Vocab')
          }
        }}
        options={{
          tabBarLabel: 'Vocab',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="select-compare" size={size} color={color} />;
          },
        }}
      /> */}
      {/* <Tab.Screen
        name="Idioms"
        listeners={{
          tabPress:e=>{
            setTitle('Idioms')
          }
        }}
        component={Idioms}
        options={{
          tabBarLabel: 'Idioms',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="alpha-i-circle-outline" size={size} color={color} />;
          },
        }}
      /> */}
      <Tab.Screen
        name="GK_GS"
        listeners={{
          tabPress:e=>{
            setTitle('GK_GS')
          }
        }}
        component={PhrasalVerbs}
        options={{
          tabBarLabel: 'GK_GS',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="alpha-p-circle-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Testing"
        listeners={{
          tabPress:e=>{
            setTitle('OWS')
          }
        }}
        component={PhrasalVerbs}
        options={{
          tabBarLabel: 'Testing',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="alpha-o-circle-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});