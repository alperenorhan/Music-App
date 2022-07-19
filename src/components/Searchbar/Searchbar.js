import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Searchbar.styles';

const Searchbar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        onChangeText={props.onSearch}
        style={styles.searchbar}
      />
    </View>
  );
};

export default Searchbar;
