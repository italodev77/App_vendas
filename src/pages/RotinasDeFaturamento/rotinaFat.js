import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import * as Animatable  from 'react-native-animatable'
export default function RotinasCadastro() {

  const navigation = useNavigation();

 return (

   <Animatable.View animation={'fadeInUp'} style={styles.container}>

    <Animatable.View animation={'zoomIn'} delay={300} style={styles.areaContainer}>

      <View style={styles.btnContainer}>

        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('CadCliente')}>
          <Text style={styles.textBtn}>ORÇAMENTO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('CadForn')}>
          <Text style={styles.textBtn}>CADASTRO DE FORNECEDOR</Text>
        </TouchableOpacity>
      </View>

    </Animatable.View>

   </Animatable.View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#262626',
    alignItems:'center',
    justifyContent:'center',
    margin:0
  },
  areaContainer:{
    flexDirection:'column',
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  btnContainer:{
    alignItems:'center'
  },
  textBtn:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:18
  },
  btn:{
    backgroundColor:'#009900',
    width:'100%',
    height:70,
    margin:15,
    padding:5,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:3,
    borderRadius:20,
    borderColor:'#FFF'
  }
})