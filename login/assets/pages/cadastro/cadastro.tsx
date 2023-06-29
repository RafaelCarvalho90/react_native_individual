import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, } from 'react-native';
import QuotesPage from '../principal/principal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const Cadastro = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [buttonColor, setButtonColor] = useState('gray');

    useEffect(() => {
        checkFields();
    }, [username, sobrenome, email, password, confirmPassword]);

    const checkFields = () => {
        if (
            username !== '' &&
            sobrenome !== '' &&
            email !== '' &&
            password !== '' &&
            confirmPassword !== ''
        ) {
            setButtonColor('green');
        } else {
            setButtonColor('gray');
        }
    };

    const goCadastro = () => {
        console.log('Entrou aqui', username, sobrenome);
        if (password === confirmPassword) {
            navigation.navigate('quotes')

            console.log('Cadastro realizado com sucesso!');
        } else {
            console.log('Senhas não são iguais...');
        }
    };

    const backlogin = () => {
        navigation.navigate('login');
    };



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={-800}
            style={styles.container}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.menuSuperior}>
                    <Text style={styles.title}>Cadastro</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu Nome"
                            placeholderTextColor="gray"
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu Sobrenome"
                            placeholderTextColor="gray"
                            onChangeText={(text) => setSobrenome(text)}
                            value={sobrenome}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            placeholder="Digite seu e-mail"
                            placeholderTextColor="gray"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            placeholder="Digite a Senha"
                            placeholderTextColor="gray"
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            placeholder="Digite novamente a senha"
                            placeholderTextColor="gray"
                            onChangeText={(text) => setConfirmPassword(text)}
                            value={confirmPassword}
                            secureTextEntry
                        />
                    </View>
                    <TouchableHighlight
                        underlayColor={buttonColor === 'green' ? 'lightgreen' : 'gray'}
                        style={[styles.signInButton, { backgroundColor: buttonColor }]}
                        onPress={goCadastro}
                        disabled={buttonColor !== 'green'}
                    >
                        <Text style={styles.signInButtonText}>Finalizar Cadastro</Text>
                    </TouchableHighlight>
                    <TouchableOpacity style={styles.backButton} onPress={backlogin}>
                        <Text style={styles.signInButtonText}>Voltar a tela de Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E252B',
        width: '100%',
    },
    menuSuperior: {
        justifyContent: 'center',
        backgroundColor: '#0B1016',
        width: '100%',
        height: 60,
        marginTop: -223,
        marginBottom: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 16,
        color: 'white',
    },
    form: {
        width: '80%',
    },
    inputGroup: {
        marginBottom: 16,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 2,
        padding: 8,
        color: 'white',
    },


    backButton: {
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: '#0B1016',
    },


    signInButton: {
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    signInButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
});

export default Cadastro;
