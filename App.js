import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { 
  Calculadora
} from './src/components'

const App = () => {
  return (
    <SafeAreaView>
      <Calculadora></Calculadora>
    </SafeAreaView>
  );
};

export default App;