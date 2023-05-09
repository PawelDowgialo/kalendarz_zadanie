import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Agenda_calendar from './components/Agenda_calendar'
import Calendar_list from './components/Calendar_list'
import Calendar_calendar from './components/Calendar_calendar'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator()

export default function App() {
  return(
    <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Agenda" component={Agenda_calendar}/>
            <Drawer.Screen name="Calendar" component={Calendar_calendar}/>
            <Drawer.Screen name="CalendarList" component={Calendar_list}/>
          </Drawer.Navigator>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 600,
    backgroundColor: '#fff'
  },
});