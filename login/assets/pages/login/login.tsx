import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
//import QuotesPage from '../principal/principal';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }: any) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'Rafael' && password === '123456') {
      setLoggedIn(true);
      handleSignin();
      console.log('Login bem-sucedido!');
    } else {
      console.log('Nome de usuário ou senha incorretos.');
    }
  };

  if (loggedIn) {

    //return <QuotesPage/>;
  }

  const handleSignUp = () => {
    navigation.navigate('cadastro');
  };
  const handleSignin = () => {
    navigation.navigate('quotes');
  };



  return (
    <View style={styles.container}>
      {/* <KeyboardAvoidingView behavior="padding" > */}
      <View style={styles.menuSuperior}>
        <Text style={styles.title}>Login</Text>
      </View>


      <TouchableOpacity style={styles.signInButtonFace}>
      <View style={styles.iconeface}>
        <Icon name="facebook" size={24} color="white" />
        </View>
        <View style={styles.nomebotaoface}>
        <Text style={styles.signInButtonText}>Continuar com Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButtonGoogle} >
        <View style={styles.iconegoogle}>
          <Icon name="google" size={24} color="black" />
        </View>
        <View style={styles.nomebotao}>
          <Text style={styles.signInGoogleButtonText}>Continuar com Google</Text>
        </View>
      </TouchableOpacity>


      <View style={styles.form}>
        <View style={styles.inputGroup}>
          {/* <Text style={styles.label}>Nome</Text> */}
          <TextInput style={styles.input} placeholder="Insira seu Nome" placeholderTextColor="gray" onChangeText={(text) => setUsername(text)}
            value={username} />
        </View>
        <View style={styles.inputGroup}>
          {/* <Text style={styles.label}>Senha</Text> */}
          <TextInput style={styles.input} placeholder="Insira a Senha" placeholderTextColor="gray" onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry />
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Fazer login com Nome e Senha</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuCadastro}>
        <Text style={styles.signup}>
          Ainda não possui uma conta?
        </Text>
        <TouchableOpacity onPress={handleSignUp} >
          <Text style={styles.signupLink}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
        {/* </KeyboardAvoidingView> */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E252B',
    width: '100%',
    overflow: 'hidden',
  },

  menuCadastro: {
    display: 'flex',
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1E252B',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuSuperior: {
    display: 'flex',
    //flex: 1,
    //alignItems: 'flex-start',
    justifyContent: 'center',
    justifyitems: 'center',
    backgroundColor: '#0B1016',
    width: '100%',
    //marginLeft: 25,
    height: 60,
    marginTop: -223,
    marginBottom: 30,
  },

  iconegoogle: {
    alignSelf: 'flex-start',
    left:'160%',
    //height:'100%',
    // margin:10,
  },

  iconeface: {
    alignSelf: 'flex-start',
    left:'160%',
    //height:'100%',
    // margin:10,
  },

  nomebotao: {
    alignSelf:'center',
    justifyContent: 'center',
    // alignItems: 'center',
    left:'300%',
    //height:'100%',
    // margin:10,
  },

  nomebotaoface: {
    alignSelf:'center',
    justifyContent: 'center',
    // alignItems: 'center',
    left:'300%',
    //height:'100%',
    // margin:10,
  },

  title: {

    fontSize: 18,
    marginBottom: 16,
    color: 'white',
    marginLeft: 25,
  },
  form: {
    width: '80%',
  },
  inputGroup: {

    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: 'white',
  },
  input: {
    //borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    color: 'white',
  },
  forgot: {
    marginTop: 8,
  },
  forgotText: {
    color: '#2473AD',
  },
  signInButton: {
    backgroundColor: 'gray',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  signInButtonFace: {
    flexDirection: 'row',
    backgroundColor: '#3C5C99',
    borderRadius: 4,
    paddingVertical: 12,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 16,
    // height:35,
    width: 300,

  },
  signInButtonGoogle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 12,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 16,
    width: 300,
    marginBottom: 100,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  signInGoogleButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
    alignSelf: 'center',  
    //marginLeft:50,
  },
  socialMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  message: {
    marginHorizontal: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    marginHorizontal: 8,
  },
  signup: {
    marginTop: 15,
    marginBottom: 16,
    color: 'white',
  },
  signupLink: {
    color: '#2473AD',
  },
});

export default LoginScreen;
