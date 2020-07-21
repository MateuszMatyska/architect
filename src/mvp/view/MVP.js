import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import {getUser, setUser} from '../presenter/Presenter';

const MVP = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const getUserAction = () => {
    const user = getUser();
    setFName(user.firstName);
    setLName(user.lastName);
  };

  const setUserAction = () => {
    setUser('Tom', 'Shelby');
    getUserAction();
  };

  useEffect(() => {
    getUserAction();
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
            setUserAction();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MVP;
