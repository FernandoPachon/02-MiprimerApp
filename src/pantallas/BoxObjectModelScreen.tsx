import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Box Object Model</Text>
    </View>
  )
}
const styles= StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    padding:50,
    margin:50,
    fontSize: 50,
    //width:150,
    borderWidth: 10,
    //backgroundColor: '#D68910',
  },
  contenedor:{
    backgroundColor: '#138D75',
    flex:1,
  },
})
