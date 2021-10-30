import React from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import Buttom from './buttom';
import ListItems from './listItems';

const items = [
  {id: 1, name: 'Miguel'}, // 0
  {id: 2, name: 'Juan'}, // 1
  {id: 3, name: 'Pedro'}, // 2
  {id: 4, name: 'Maria'}, // 3
];

const Bienvenida = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textBienvenida}>
          <Text>Bienvenid@ a nuestra app</Text>
        </View>
        <View style={styles.seccion}>
          <View>
            {items.map((item, index) => (
              <ListItems key={index} item={item.name} />
            ))}
          </View>
          <View>
            <Image
              style={styles.img}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2012/04/05/01/40/balloons-25737_1280.png',
              }}
            />
          </View>
        </View>
        <View>
          <Buttom description="Nuevo plan" />
        </View>
        <View style={styles.btnSalir}>
          <Buttom description="Salir" action={props.changeView} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBienvenida: {
    height: '30%',
  },
  seccion: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  btnSalir: {
    marginTop: 5,
  },
});

export default Bienvenida;
