import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

const Agenda_calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [aktualnaData, setAktualnaData] = useState('');

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    setAktualnaData(`${year}-${month}-${day}`);
  }, []);

  const wydarzenia = {
    [aktualnaData]: [{ opis: 'Takie te' }],
    '2023-04-20': [{ opis: 'urodziny Mścisława' }]
  };

  function selectedDateHandler(day) {
    setSelectedDate(day.dateString);
  }

  function renderPustaData() {
    return (
      <View>
        <Text>tak</Text>
      </View>
    );
  }

  function renderWydarzenia(wyd) {
    return (
      <View>
        <Text>{wyd.opis}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Agenda
        items={wydarzenia}
        renderItem={renderWydarzenia}
        renderEmptyData={renderPustaData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 600,
    backgroundColor: '#fff'
  },
});

export default Agenda_calendar