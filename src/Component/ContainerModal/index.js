import React from 'react';
import { Modal } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
export default function ContainerModal({ onClose, visible }) {
  
  const navigation = useNavigation();

  return (
    <Modal animationType='slide' visible={visible} transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>

        <View style={styles.btnContainer}>
          <View style={styles.sideTextModal}>
            <Text style={styles.btnText}>Orçamentos</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Feather name="file-text" size={30} color={'#FFF'}></Feather>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.sideTextModal}>
            <Text style={styles.btnText}>Vendas</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Vendas')}>
            <Feather name="shopping-cart" size={30} color={'#FFF'} />
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer} >
          <View style={styles.sideTextModal}>
            <Text style={styles.btnText}>Fechar</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={onClose} >
            <FontAwesome name="angle-down" size={45} color={'#FFF'} />
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
     // Defina o valor de transparência aqui
    height: 140,
    width: 60,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10%',
    right: '1%'
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row', // Adicione essa propriedade
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 60,
    borderRadius: 30,
    marginRight: 35,
    paddingRight: 10

  },
  btnText: {
    fontSize: 15,
    color: '#FFF',
    justifyContent: 'flex-start',
    fontWeight: 'bold'
  },
  sideTextModal: {
    width: 88,
    height: 25,
    backgroundColor: '#808080',
    marginRight: 30,
    alignItems: 'center',
    borderRadius:10
  }
})