import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from './components/Button/Button';
import Home from './components/Home/Home';
import ListModal from './components/Modal/ListModal';

export default function App() {

  return (

      <View style={styles.container}>
     <ListModal/>
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
