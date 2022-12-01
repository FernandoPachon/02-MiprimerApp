import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PosiciónScreens = () => {
  return (
    <View style={styles.contenedor}>
    <View style={styles.cajaMorada}/>
    <View style={styles.cajaNaranja} />
    <View style={styles.cajaVerde} />
    <View style={styles.cajaAmarilla} />
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor: {
       // flex: 1,
       width:400,
       height:400,
        backgroundColor:'#F9E79F',
        //justifyContent:'center',
        //alignItems:'center',
    },
    cajaMorada: {
        width:100,
        height:100,
        backgroundColor:'#8E44AD',
        borderWidth:10,  
        borderColor:'#FFFFFF',
        position:'absolute',
        bottom:10,
        right:10,
        
    },
    cajaNaranja: {
        width:100,
        height:100,
        backgroundColor:'#F39C12',
        borderWidth:10,  
        borderColor:'#FFFFFF',
        position:'absolute',
        right:10,
    },
    cajaVerde: {
        width:100,
        height:100,
        backgroundColor:'#1E8449',
        borderWidth:10,  
        borderColor:'#FFFFFF',
        position:'absolute',
        bottom:10,
    },
    cajaAmarilla: {
        width:100,
        height:100,
        backgroundColor:'#F4D03F',
        borderWidth:10,  
        borderColor:'#FFFFFF',
        position:'absolute',
        
    },
});
