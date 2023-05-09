import { Calendar } from 'react-native-calendars';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Calendar_calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [aktualnaData, setAktualnaData] = useState('');

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    setAktualnaData(`${year}-${month}-${day}`);
  }, []);

  function selectedDateHandler(day) {
    setSelectedDate(day.dateString);
  }

  return (
    <View style={styles.container}>
      <Calendar
        current={aktualnaData}
        minDate=''
        maxDate='2029-12-31'
        onDayPress={selectedDateHandler}
        markedDates={
            {
                [selectedDate]:{selected:true},
                [aktualnaData]:{marked:true},
                '2023-06-01':{marked:true , dotColor:'red'},
                '2023-06-03':{selected:true , selectedColor:'red'},
            }
        }
        
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

export default Calendar_calendar