import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Query2 = () => {
    const[data,setData] = useState([]);
    const request =  async () => {
        console.log('selam');
        await fetch('http://localhost:8000/getQuery2')
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json)
          })
          .catch(err => console.log(err));

          console.log("aaa",data)
      };

    return (
        <View>
          <Text style={styles.title}>
            Tip 2 - Sorgu 2 hesaplaması için butona tıklayınız.
          </Text>
          <Button title="Tıkla" color="black" onPress={() => request()} />
          <Text style={styles.fixToText} >            Tarih                Ortalama Ücret</Text>
          {data != '' ? <Text style={styles.fixToText} >Min1   {data[0].day}       {data[0].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[1].day}       {data[1].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[2].day}       {data[2].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[3].day}       {data[3].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[4].day}       {data[4].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[5].day}       {data[5].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[6].day}       {data[6].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[7].day}       {data[7].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[8].day}       {data[8].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >            {data[9].day}       {data[9].average}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >Min2   {data[10].day}       {data[10].average}</Text> : null}

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
    
    export default Query2;