import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';

import api from '../../services/api';

import LinearGradient from 'react-native-linear-gradient';

export default function List({ navigation }) {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('students').then(res => {
      setStudents(res.data);
    });
  }, []);

  const _renderItem = () => {
    {return (
      students.map(student => (
      <View style={styles.item}>
        <Text style={styles.itemName} key={student.id} >{student.name}</Text>

        <View style={styles.medLine}>
          <Text style={styles.textItemPdf}>Matrícula: {student.registration}</Text>

          <TouchableOpacity style={styles.pdfButton}>

            <Text style={{
              fontSize: 17,
              color: '#fff',
              textAlign: 'center',
            }}>PDF</Text>

          </TouchableOpacity>
        </View>

        <Text style={styles.itemCourse}>{student.course}</Text>
      </View>
    )));
  }};

  return (
    <LinearGradient
      colors={['#322775', '#304586', '#304D89']}
      style={styles.container}
    >
      <StatusBar backgroundColor="#322775" />

      <View style={styles.title}>
        <Text style={styles.textTitle}>Alunos Cadastrados</Text>
      </View>

      <View style={styles.listView}>

        <FlatList
          data={students}
          renderItem={_renderItem}
          keyExtractor={student => student.id}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.btnText}>Novo Cadastro</Text>

        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: '10%',
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  listView: {
    width: '80%',
    marginTop: '10%',
    alignSelf: 'center',
  },
  item: {
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  itemName: {
    top: 10,
    left: 10,
    fontSize: 17,
    marginBottom: 3,
  },
  medLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textItemPdf: {
    top: 10,
    left: 10,
    fontSize: 17,
    marginBottom: 3,
  },
  itemCourse: {
    top: 10,
    left: 10,
    fontSize: 17,
    marginBottom: 20,
  },
  pdfButton: {
    top: 5,
    right: 15,
    width: '20%',
    borderRadius: 4,
    backgroundColor: '#e02041',
  },
  button: {
    height: 50,
    marginTop: 6,
    width: '100%',
    borderRadius: 8,
    marginBottom: '8%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a3557',
    opacity: 0.8,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
});