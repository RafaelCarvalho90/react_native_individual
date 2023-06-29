import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputLogin = () => {
  return (
    <View style={styles.group}>
      <TextInput style={styles.input} />
      <View style={styles.highlight}></View>
      <View style={styles.bar}></View>
      <Text style={styles.label}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    position: 'relative',
  },
  input: {
    fontSize: 16,
    padding: 10,
    paddingBottom: 5,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#515151',
    backgroundColor: 'transparent',
  },
  highlight: {
    position: 'absolute',
    height: '60%',
    width: 100,
    top: '25%',
    left: 0,
    backgroundColor: 'rgba(82, 100, 174, 0.5)',
  },
  bar: {
    position: 'relative',
    width: 200,
  },
  label: {
    color: '#999',
    fontSize: 18,
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: 5,
    top: 10,
    transition: '0.2s ease all',
    MozTransition: '0.2s ease all',
    WebkitTransition: '0.2s ease all',
  },
});

export default InputLogin;
