import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './assets/pages/login/login';
import Cadastro from './assets/pages/cadastro/cadastro';
import Rotas from './assets/routes';

export default function App() {
  return (
      <Rotas/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '1E252B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
