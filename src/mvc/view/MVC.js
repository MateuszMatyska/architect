import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Button, TextInput, Text} from 'react-native';
import {getUserData, setUserData} from '../controller/Controller';

const MVC = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const getUser = () => {
    const user = getUserData();
    setFName(user.fName);
    setLName(user.lName);
  };

  const setUser = () => {
    setUserData('Tom', 'Shelby');
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
