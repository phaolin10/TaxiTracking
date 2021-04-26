import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';



const Query3 = () => {
    const[data,setData] = useState([]);
    const request =  async () => {
        console.log('selam');
        await fetch('http://localhost:8000/getQuery3')
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json)
          })
          .catch(err => console.log(err));

          console.log("aaa",data)
      };


   return(
       <SafeAreaView>
       <Text style={styles.title}>
            Tip 3 - Sorgu 3 hesaplaması için butona tıklayınız.
          </Text>
          <Button title="Tıkla" color="darkred" onPress={() => request()} />

          <Text style={styles.fixToText} >Uzaklık          BinilenYerID-İnilenYerID</Text>
          {data != '' ? <Text style={styles.fixToText} >{data[0].distance}                  {data[0].DOLocationMax}                   {data[0].PULocationMax}</Text> : null}
          {data != '' ? <Text style={styles.fixToText} >{data[1].distance}                {data[1].DOLocationMax}                   {data[1].PULocationMax}</Text> : null}

       </SafeAreaView>
   )

}
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



export default Query3;
