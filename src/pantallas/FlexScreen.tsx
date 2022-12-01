import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.contenedor}>
    <Text style={styles.caja1}> Caja 1</Text>
    <Text style={styles.caja2}> Caja 2</Text>
    <Text style={styles.caja3}> Caja 3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: '#AED6F1',
    },
    caja1:{
       borderWidth:2,
       borderColor: '#2ECC71',
       fontSize: 30, 
    },
    caja2:{
       borderWidth:2,
       borderColor: '#F1C40F', 
       fontSize: 30, 
    },
    caja3:{
       borderWidth:3,
       borderColor: '#3498DB', 
       fontSize: 30, 
    },
});