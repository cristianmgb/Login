import React, {useState} from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import Login from './src/containers/login';
import Bienvenida from './src/components/bienvenida';

const App = () => {
  const [isLog, setIsLog] = useState(false);

  const changeView = isLogged => {
    setIsLog(isLogged);
  };
  const salir = () => {
    setIsLog(false);
  };

  return (
    <SafeAreaView>
      <View>
        {isLog ? (
          <Bienvenida changeView={salir} />
        ) : (
          <Login changeView={changeView} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
