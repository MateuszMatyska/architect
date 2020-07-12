import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Flux from '../flux/screens/index';
import MVC from '../mvc/view/MVC';

const Drawer = createDrawerNavigator();

export default function AppNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Flux" component={Flux} />
      <Drawer.Screen name="MVC" component={MVC} />
    </Drawer.Navigator>
  );
}
