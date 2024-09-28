import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './Drawer';
import { NavigationScreenName } from '@customTypes/navigation';

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name={NavigationScreenName.Drawer}
          component={Drawer}
          options={{ headerShown: false }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
