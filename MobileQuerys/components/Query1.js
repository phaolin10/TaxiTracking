import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';

const Query1 = () => {
  const [data, setData] = useState([]);

  const request =  async () => {
    await fetch('http://localhost:8000/getQuery1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Text style={styles.title}>
        Tip 1 - Sorgu 1 hesaplaması için butona tıklayınız.
      </Text>
      <Button title="Tıkla" color="midnightblue" onPress={() => request()} />
      <Text style={styles.fixToText} >Tarih                                 Mesafe</Text>
      {data != '' ? <Text style={styles.fixToText} >{data[0].day}     {data[0].distance}</Text> : null}
      {data != '' ? <Text style={styles.fixToText} >{data[1].day}     {data[1].distance}</Text> : null}
      {data != '' ? <Text style={styles.fixToText} >{data[2].day}     {data[2].distance}</Text> : null}
      {data != '' ? <Text style={styles.fixToText} >{data[3].day}     {data[3].distance}</Text> : null}
      {data != '' ? <Text style={styles.fixToText} >{data[4].day}     {data[4].distance}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontFamily: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    fontSize: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Query1;
