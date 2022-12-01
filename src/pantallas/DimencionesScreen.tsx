import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//const {width, height} = Dimensions.get('screen');
export const DimensionesScreen = () => {

    const {width, height} =useWindowDimensions();
  return (
    <View>
        <View style={{
            ...styles.contenedor,
            width:width*2
        }}>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaMorada}/>
    </View>
        <Text style={styles.titulo}>W:{width}, H:{height}</Text>
    </View>
    
    
    )
}
const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#AED6F1',
        width:'100%',
        height:200,
    },
    cajaMorada:{
        backgroundColor: '#8E44AD',
        //width:'50%',
        height:'50%',
    },
    cajaNaranja:{
        backgroundColor: '#F39C12'
    }, 
    titulo:{
        fontSize:50,
        textAlign: 'center',
    }
});