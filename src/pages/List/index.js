import React from 'react';
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

export default function Billet({ navigation }) {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.item}>
            <Text style={styles.itemName}>Jeziel Marques Braga</Text>

            <View style={styles.medLine}>
              <Text style={styles.textItemPdf}>Matrícula: 164762</Text>

              <TouchableOpacity style={styles.pdfButton}>

                <Text style={{
                  fontSize: 17,
                  color: '#fff',
                  textAlign: 'center',
                }}>PDF</Text>

              </TouchableOpacity>
            </View>

            <Text style={styles.itemCourse}>Ciência da Computação</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemName}>Jeziel Marques Braga</Text>

            <View style={styles.medLine}>
              <Text style={styles.textItemPdf}>Matrícula: 164762</Text>

              <TouchableOpacity style={styles.pdfButton}>

                <Text style={{
                  fontSize: 17,
                  color: '#fff',
                  textAlign: 'center',
                }}>PDF</Text>

              </TouchableOpacity>
            </View>

            <Text style={styles.itemCourse}>Ciência da Computação</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemName}>Jeziel Marques Braga</Text>

            <View style={styles.medLine}>
              <Text style={styles.textItemPdf}>Matrícula: 164762</Text>

              <TouchableOpacity style={styles.pdfButton}>

                <Text style={{
                  fontSize: 17,
                  color: '#fff',
                  textAlign: 'center',
                }}>PDF</Text>

              </TouchableOpacity>
            </View>

            <Text style={styles.itemCourse}>Ciência da Computação</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemName}>Jeziel Marques Braga</Text>

            <View style={styles.medLine}>
              <Text style={styles.textItemPdf}>Matrícula: 164762</Text>

              <TouchableOpacity style={styles.pdfButton}>

                <Text style={{
                  fontSize: 17,
                  color: '#fff',
                  textAlign: 'center',
                }}>PDF</Text>

              </TouchableOpacity>
            </View>

            <Text style={styles.itemCourse}>Ciência da Computação</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemName}>Jeziel Marques Braga</Text>

            <View style={styles.medLine}>
              <Text style={styles.textItemPdf}>Matrícula: 164762</Text>

              <TouchableOpacity style={styles.pdfButton}>

                <Text style={{
                  fontSize: 17,
                  color: '#fff',
                  textAlign: 'center',
                }}>PDF</Text>

              </TouchableOpacity>
            </View>

            <Text style={styles.itemCourse}>Ciência da Computação</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.btnText}>Cadastrar</Text>

          </TouchableOpacity>
        </ScrollView>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: '6%',
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  listView: {
    width: '80%',
    marginTop: 12,
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
    top: 10,
    right: 15,
    width: '20%',
    borderRadius: 4,
    backgroundColor: '#304D89',
  },
  button: {
    height: 50,
    width: '100%',
    marginTop: 8,
    borderRadius: 8,
    marginBottom: '25%',
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