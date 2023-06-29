import React, { useState, useEffect, ReactNode } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Menu from '../../components/menuInferior';
import LoginScreen from '../login/login';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const QuotesPage = ({navigation}:any)  => {
  const [quotes, setQuotes] = useState<{
    symbol: ReactNode; date: string; close: string; open: string;
  }[]>([]);


  useEffect(() => {
    fetchQuotes();
  }, []);


  const fetchQuotes = () => {
    const symbols = ['EUR/USD', 'GBP/USD', 'USD/JPY', 'BRL/USD', 'USD/BRL'];
    const apiKey = 'CA30MA94A1RPGES8';
    const baseUrl = 'https://www.alphavantage.co/query?function=FX_DAILY';

    const requests = symbols.map((symbol) => {
      const url = `${baseUrl}&from_symbol=${symbol.split('/')[0]}&to_symbol=${symbol.split('/')[1]}&apikey=${apiKey}`;
      return axios.get(url);
    });

    axios
      .all(requests)
      .then((responses) => {
        const formattedQuotes = responses.map((response, index) => {
          const weeklyQuotes = response.data['Time Series FX (Daily)'];
          const latestDate = Object.keys(weeklyQuotes)[0];

          return {
            symbol: symbols[index],
            date: latestDate,
            close: weeklyQuotes[latestDate]['4. close'],
            open: weeklyQuotes[latestDate]['1. open'],
          };
        });

        console.log("entrou aqui", formattedQuotes);
        setQuotes(formattedQuotes);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleLogout = () => {
    navigation.navigate('login');
  };
  const noticias = () => {
    navigation.navigate('noticias');
  };
  
 
  
  const renderQuotes = () => {
    return quotes.map((quote, index) => (
      <View key={index} style={styles.gradeCotacao}>
        <View style={styles.dadocotacao}>
          {quotes.length > 0 && (
            <View style={styles.quoteContainer}>
              <View style={styles.descrAtivo}>
                <Text style={styles.nameText}>{quote.symbol}</Text>
                <Text style={styles.dateText}>{quote.date}</Text>
              </View>
              <View style={styles.valor}>
                <Text style={styles.openText}>Abertura: {quote.open}</Text>
                <Text style={styles.closeText}>Fechamento: {quote.close}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    ));
  };




  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.ButtonTextLogo}>Investing.com</Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttomMenu}>
          <Text style={styles.ButtonText}>Índices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomMenu}>
          <Text style={styles.ButtonText}>Futuros de índices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomMenu}>
          <Text style={styles.ButtonText}>Ações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomMenu}>
          <Text style={styles.ButtonText}>Commodities</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.anuncio}>Profit Grátis para Sempre </Text>
        <Text style={styles.anuncioCont}>|AD| </Text>
      </View>
      {renderQuotes()}
      <Menu noticias={noticias} handleLogout={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 16,
    backgroundColor: '#1E252B',
    width: '100%',
    marginTop: 15,
  },
  anuncio: {
    borderRadius: 5,
    backgroundColor: '#0fa601',
    marginBottom: 0,
    color: '#fff',
  },
  anuncioCont: {
    textAlign: 'center',
    color: '#596066',
    //justifyContent:'center',
    marginBottom: 60,
  },

  buttomMenu: {
    marginLeft: 2,
  },
  gradeCotacao: {
    backgroundColor: 'red,'
  },
  dadocotacao: {
    backgroundColor: '#1e252b',
    flexDirection: 'row',

  },

  descrAtivo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 10,


    //width:'50%',
  },
  ButtonText: {
    fontSize: 13,
    //fontWeight: 'bold',
    color: 'white',
  },
  ButtonTextLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  valor: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logo: {
    marginTop: -40,
    backgroundColor: '#0b1016',
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  header: {
    backgroundColor: '#2a3139',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  menuInf: {
    backgroundColor: '#2a3139',
    height: 80,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 95,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
  },
  quoteContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
    width: '100%',
    backgroundColor: '#1e252b',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: 'gray'
  },
  dateText: {
    fontSize: 10,
    marginBottom: 4,
    fontWeight: 'bold',
    color: 'white',
  },

  nameText: {
    fontSize: 15,
    marginBottom: 4,
    // fontWeight: 'bold',
    color: 'white',
  },
  openText: {
    fontSize: 13,
    marginBottom: 4,
    color: 'green',
  },
  closeText: {
    fontSize: 13,
    marginBottom: 4,
    color: '#703d3b',
  },
});

export default QuotesPage;
