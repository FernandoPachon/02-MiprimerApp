import React from 'react';
import { View,Text, SafeAreaView } from 'react-native';
import { TareaScreen } from './src/pantallas/TareaScreen';
//import { FlexScreen } from './src/pantallas/FlexScreen';
//import { PosiciónScreens } from './src/pantallas/PosicionScreens';
//import { DimensionesScreen } from './src/pantallas/DimencionesScreen';
//import { BoxObjectModelScreen } from './src/pantallas/BoxObjectModelScreen';
//import { Contador } from './src/pantallas/Contador';
//import { ContadorScreen } from './src/pantallas/ContadorScreens';
//import { HolaMundoScreens } from './src/pantallas/HolaMundoScreens';


const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor:'#21618C',
      }}>
      {/* <HolaMundoScreens/>
     <ContadorScreen/>
     <Contador/> 
     <DimensionesScreen/>
     <BoxObjectModelScreen/>
     <FlexScreen/>
     <PosiciónScreens/>*/}
     <TareaScreen/>
    </SafeAreaView>

  )
}
export default App; 
