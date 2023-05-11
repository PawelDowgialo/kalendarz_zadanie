import { CalendarList } from 'react-native-calendars';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Calendar_list = () => {
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

  const theme = {
    calendarBackground: 'black',
    monthTextColor: 'white',
    dayTextColor: 'white'
  };

  return (
    <View style={styles.container}>
      <CalendarList
        //dodatkowe
        hideExtraDays={true}
        theme={theme}
        //
        current={aktualnaData}
        minDate='2022-12-11'
        maxDate='2029-12-11'
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
    backgroundColor: '#fff'
  },
});

export default Calendar_list