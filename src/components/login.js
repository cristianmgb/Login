import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Buttom from './buttom';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/Free_cola_logo.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Image
            source={require('../assets/power_girl.png')}
            style={styles.imgLongin}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Sunt amet deserunt sit pariatur ut eu cillum voluptate consectetur
            adipisicing anim magna. Anim velit ex nostrud veniam ut. Sint minim
            irure minim duis exercitation enim. Ut occaecat aliquip nostrud
            amet. Mollit dolor excepteur minim eiusmod elit cupidatat mollit
            nostrud. Sunt minim eu ea eu qui id aliquip cillum fugiat anim
            eiusmod.
          </Text>
        </View>
        <View style={styles.containerCircle}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
        <View style={styles.containerInput}>
          <TextInput placeholder="Ingresa tu usuario" style={styles.input} />
        </View>
        <Buttom description={102} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  imgLongin: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  containerText: {
    marginBottom: 25,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  containerCircle: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    marginHorizontal: 4,
    borderRadius: 10,
  },
  containerInput: {
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    width: 250,
    height: 40,
    borderColor: 'black',
  },
});

export default Login;
