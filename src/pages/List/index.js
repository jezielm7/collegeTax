import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Billet({ navigation }) {
  return (
    <LinearGradient 
      colors={['#322775', '#304586', '#304D89']} 
      style={styles.container}
    >
      <StatusBar backgroundColor="#322775" />

      <Text style={styles.textTitle}>Alunos Cadastrados</Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    top: '10%',
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
  },
});