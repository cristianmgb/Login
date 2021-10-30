import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItems = props => {
  return (
    <View style={styles.contentList}>
      <Text>{props.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 65,
  },
});

export default ListItems;
