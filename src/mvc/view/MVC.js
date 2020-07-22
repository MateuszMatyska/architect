import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import {getUserData, setUserData} from '../controller/Controller';
import Model from '../model/Model';

const MVC = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const getUser = () => {
    const user = Model.getUserObject();
    setFName(user.firstName);
    setLName(user.lastName);
  };

  const setUser = () => {
    setUserData('Jax', 'Teller');
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

export default MVC;
