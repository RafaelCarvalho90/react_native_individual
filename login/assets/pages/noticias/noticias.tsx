import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../../components/menuInferior';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewsList = () => {
  return (
    <View style={styles.container}>
        <Icon name="exclamation" size={80} color="white" />
      <Text style={styles.text}>Em manutenção</Text>
        <View style={styles.ajuste}>
            <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E252B',
  },

  ajuste:{
    width: '100%',
    marginTop:400,
    marginBottom:-120,
    
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NewsList;
