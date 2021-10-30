import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Buttom = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttom}
        onPress={() => {
          props.action();
        }}>
        <Text style={styles.btnText}>{props.description}</Text>
      </TouchableOpacity>
    </View>
  );
};

Buttom.defaultProps = {
  description: 'Boton',
  action: () => {},
};

Buttom.propTypes = {
  description: PropTypes.string,
  action: PropTypes.func,
};

const styles = StyleSheet.create({
  buttom: {
    width: 200,
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
});

export default Buttom;
