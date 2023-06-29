import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = ({ noticias, handleLogout,navigation}:any) => {

    
  return (
    <View style={styles.customMenuInf}>
      <TouchableOpacity style={styles.buttomMenu}>
        <Text style={styles.ButtonText}>Cotações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttomMenu} onPress={noticias}>
        <Text style={styles.ButtonText}>Noticias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttomMenu}>
        <Text style={styles.ButtonText}>Pesquisar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttomMenu}>
        <Text style={styles.ButtonText}>Carteira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttomMenu} onPress={handleLogout}>
        <Text style={styles.ButtonText}>Sair.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  customMenuInf: {
    backgroundColor: '#2a3139',
    height: 80,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 95,
  },
  buttomMenu: {
    marginLeft: 2,
  },
  ButtonText: {
    fontSize: 13,
    color: 'white',
  },
});

export default Menu;
