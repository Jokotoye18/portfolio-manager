import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './MainStackNavigator';

export const NavigationContainerComponent = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
