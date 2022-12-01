import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View,StyleSheet} from 'react-native';
import { Fab } from '../componentes/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View
      style={styles.container}>
      <Text
        style={styles.title}>
        Contador: {contador}
      </Text>
      <Fab
        title='+1'
        onPress={() =>setContador(contador + 1)}
      />
      <Fab
        title='-1'
        position='bl'
        onPress={() =>setContador(contador - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#17202A',
    flex: 1,
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    fontSize: 50,
    top: -15,
    color:'white',
  },
 
  })
  