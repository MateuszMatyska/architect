import React from 'react';
import {SafeAreaView} from 'react-native';
import Controls from '../components/controls';
import Value from '../components/value';

const CounterScreen = () => {
  return (
    <SafeAreaView>
      <Controls />
      <Value />
    </SafeAreaView>
  );
};

export default CounterScreen;
