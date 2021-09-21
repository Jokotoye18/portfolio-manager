import React from 'react';
import { StatusBar } from 'react-native';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './constants';
import { NavigationContainerComponent } from './navigations';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <NavigationContainerComponent />
    </>
  );
};

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
