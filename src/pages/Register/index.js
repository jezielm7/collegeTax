import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';

export default function Register({ navigation }) {

  const [students, setStudents] = useState([]);

  const [birthday, setBirthday] = useState();
  const [cpf, setCpf] = useState();

  return (
    <LinearGradient
      colors={['#221f32', '#493a99', '#382699']}
      style={styles.container}
    >
      <StatusBar backgroundColor="#221f32" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>Cadastro</Text>

        <View style={styles.loginView}>

          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            autoCorrect={false}
            placeholderTextColor="#eee"
          />

          <TextInputMask
            type={'datetime'}
            options={{
              mask: 'DD/MM/YYYY'
            }}
            value={birthday}
            onChangeText={text => {
              setBirthday(text)
            }}
            style={styles.input}
            placeholder="Data de Nascimento"
            keyboardType="number-pad"
            placeholderTextColor="#eee"
          />

          <TextInput
            style={styles.input}
            placeholder="Nome do Responsável"
            autoCorrect={false}
            placeholderTextColor="#eee"
          />

          <TextInputMask
          type={'cpf'}
          
          value={cpf}
          onChangeText={text => {
            setCpf(text)
          }}
            style={styles.input}
            placeholder="CPF do Responsável"
            keyboardType="number-pad"
            placeholderTextColor="#eee"
          />

          <Text style={styles.titleForm}>Dados Universitários</Text>

          <TextInput
            style={styles.input}
            placeholder="Matrícula"
            keyboardType="number-pad"
            placeholderTextColor="#eee"
          />

          <TextInput
            style={styles.input}
            placeholder="Curso"
            autoCorrect={false}
            placeholderTextColor="#eee"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('List')}
          >
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 32,
    color: '#fff',
    marginTop: '5%',
    textAlign: 'center',
  },
  loginView: {
    flex: 1,
    top: '5%',
  },
  loginTxt: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '15%',
  },
  input: {
    padding: 12,
    width: '80%',
    fontSize: 16,
    color: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: 'center',
    borderColor: '#ddd',
    borderWidth: 0.8,
  },
  titleForm: {
    fontSize: 28,
    color: '#fff',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: '80%',
    marginTop: 8,
    borderRadius: 8,
    marginBottom: '15%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a3557',
    opacity: 0.8,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
});