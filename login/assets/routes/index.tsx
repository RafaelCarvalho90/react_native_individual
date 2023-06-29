import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro/cadastro';
import LoginScreen from '../pages/login/login';
import QuotesPage from '../pages/principal/principal';
import NewsList from '../pages/noticias/noticias';



const Stack = createNativeStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="quotes" component={QuotesPage} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="noticias" component={NewsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Rotas;