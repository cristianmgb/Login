import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import Login from './src/components/login';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <Login />
      </View>
    </SafeAreaView>
  );
};

export default App;
