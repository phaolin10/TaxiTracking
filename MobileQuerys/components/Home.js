import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Separator = () => <View style={styles.separator} />;

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.header}>
       Mobil Sorgular Projesi
      </Text>
      </View>

      <View>
        <Text style={styles.title}>
          Tip 1 - Sorgu 1 hesaplaması için butona tıklayınız.
        </Text>
        <Button title="Tıkla" color = "midnightblue" onPress={() => Actions.Query1()} />
      </View>
     <Separator/>
      <View>
        <Text style={styles.title}>
          Tip 2 - Sorgu 2 hesaplaması için butona tıklayınız.
        </Text>
        <Button
          title="Tıkla"
          color="black"
          onPress={() => Actions.Query2()}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Tip 3 - Sorgu 3 hesaplaması için butona tıklayınız.
        </Text>
        <Button
          title="Tıkla"
          color="darkred"
          onPress={() => Actions.Query3()}
        />
      </View>
      <Separator />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header : {
    fontFamily : "bold",
    fontSize : 30,
    textAlign : 'center'
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Home;
