import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, } from 'react-native';
import ContainerModal from '../../Component/ContainerModal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Component/Header';
export default function Rotinas() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      closeModal();
    }
  }, [isFocused]);

  const modalControl = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Animatable.View animation={'fadeInUp'} style={styles.container}>
        <Animatable.View animation={'zoomIn'} delay={300} style={styles.row}>
          <View style={styles.btnContainer}>
            <Text style={styles.title}>CADASTROS</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('RotinasCadastro')}>
              <FontAwesome name="edit" size={55} color={'#FFF'} />
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.title}>ESTOQUE</Text>
            <TouchableOpacity style={styles.btn}>
              <Feather name="package" size={55} color={'#FFF'} />
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <Animatable.View animation={'zoomIn'} delay={300} style={styles.row}>
          <View style={styles.btnContainer}>
            <Text style={styles.title}>FATURAMENTO</Text>
            <TouchableOpacity style={styles.btn}>
              <FontAwesome name="line-chart" size={55} color={'#FFF'} />
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <Text style={styles.title}>FINANCEIRO</Text>
            <TouchableOpacity style={styles.btn}>
              <FontAwesome name="pie-chart" size={55} color={'#FFF'} />
            </TouchableOpacity>
          </View>
        </Animatable.View>

        {modalVisible && (
          <TouchableOpacity style={styles.backdrop}>
            <ContainerModal onClose={closeModal} visible={modalVisible} />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={modalControl} style={styles.btnModal}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: '#FFF', alignSelf: 'center', fontWeight: 'bold' }}>
              R$
            </Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  row: {
    flexDirection: 'row',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  btnContainer: {
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#009900',
    width: 100,
    height: 100,
    margin: 15,
    marginTop: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderColor: '#009900',
    elevation: 2,
    shadowColor: '#009900',
  },
  btnModal: {

    backgroundColor: '#009900',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: '2%',
    right: '0.05%',
    marginRight: -25,
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: '#009900',
    elevation: 2,
    shadowColor: '#009900',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
