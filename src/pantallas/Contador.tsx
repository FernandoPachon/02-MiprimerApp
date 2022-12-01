import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Contador = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Contador 2: {contador}</Text>
      <TouchableOpacity
        style={styles.botonSuma}
        onPress={() => setContador(contador + 1)}>
        <View style={styles.boton}>
          <Text style={styles.botonTexto}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botonResta}
        onPress={() => setContador(contador - 1)}>
        <View style={styles.boton}>
          <Text style={styles.botonTexto}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#641E16',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 50,
    color: '#fff',
  },
  boton: {
    backgroundColor: '#ABEBC6',
    width: 60,
    height: 60,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  botonTexto: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
  },
  botonSuma: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  botonResta: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
