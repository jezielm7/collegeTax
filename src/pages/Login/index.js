import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Login({ navigation }) {
  return (
    <LinearGradient
      colors={['#5700D8', '#6100BF', '#8300C0']}
      style={styles.container}
    >
      <StatusBar backgroundColor="#5700D8" />

      <Text style={styles.textTitle}>College Tax</Text>

      <View style={styles.loginView}>
        <Text style={styles.loginTxt}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#eee"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="number-pad"
          secureTextEntry
          placeholderTextColor="#eee"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.btnText} >Entrar</Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    top: '10%',
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
  },
  loginView: {
    flex: 1,
    top: '24%',
  },
  loginTxt: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '15%',
  },
  input: {
    padding: 10,
    width: '80%',
    fontSize: 16,
    color: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: 'center',
    borderColor: '#ddd',
    borderWidth: 0.8,
  },
  button: {
    height: 50,
    width: '80%',
    marginTop: 8,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 0.8,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
});