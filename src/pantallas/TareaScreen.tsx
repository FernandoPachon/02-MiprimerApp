import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.contenedor}>
    <View style={styles.cajaMorada}/>
    <View style={styles.cajaNaranja}/>
    <View style={styles.cajaAzul}/>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#273746',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cajaMorada: {
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#A569BD',
        
    },
    
    cajaNaranja: {
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#D35400',
        right: -100,
    },
    
    cajaAzul: {
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5499C7',
         
    }
});