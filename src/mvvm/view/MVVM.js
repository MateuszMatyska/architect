import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import ViewModel from '../viewModel/ViewModel';

const MVVM = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const getUser = () => {
    const user = ViewModel.getUserData();
    setFName(user.firstName);
    setLName(user.lastName);
  };

  const setUser = () => {
    ViewModel.setUserData('Elliot', 'Alderson');
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>{fName}</Text>
        <Text>{lName}</Text>
      </View>
      <View>
        <Button
          title="Set Data"
          onPress={() => {
            setUser();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MVVM;
