import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '@screens/Home';
import StopWatch from '@screens/StopWatch';

import { NavigationScreenName } from '@customTypes/navigation';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={NavigationScreenName.Home} component={Home} />
      <Drawer.Screen
        name={NavigationScreenName.StopWatch}
        component={StopWatch}
      />
    </Drawer.Navigator>
  );
}
