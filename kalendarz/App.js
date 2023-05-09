import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Agenda_calendar from './components/Agenda_calendar'
import Calendar_list from './components/Calendar_list'
import Calendar_calendar from './components/Calendar_calendar'

export default function App() {
  return(
    <Calendar_list/>
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