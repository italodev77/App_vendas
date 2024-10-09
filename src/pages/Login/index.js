import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'
export default function Login(){

  const navigation = useNavigation();
 return (
    <View style={styles.container}>

      <Animatable.View animation={'fadeInLeft'} delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>

        <Text style={styles.inputTitle}>Email</Text>
        <TextInput 
          placeholder='Digite um e-mail'
          style={styles.input}
        />

        <Text style={styles.inputTitle}>Senha</Text>
        <TextInput 
          placeholder='Digite sua senha'
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Rotinas')}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={ () => navigation.navigate('Register')}>
          <Text style={styles.btnRegisterText}>Não possui conta? cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#009900'
  },
  containerHeader:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  message:{
    fontSize:25,
    color:'#FFF',
    fontWeight:'bold'
  },
  containerForm:{
    backgroundColor:'#FFF',
    flex:1,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  inputTitle:{
    fontSize:20,
    marginTop:20,
    fontWeight:'bold'
  },
  input:{
    borderBottomWidth:1,
    borderColor:'#262626',
    height:40,
    marginBottom:12,
    fontSize:16
  },
  btn:{
    backgroundColor:'#009900',
    width:'100%',
    borderRadius:5,
    paddingVertical:8,
    marginTop:14,
    justifyContent:'center',alignItems:'center'
  },
  btnText:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'
  },
  btnRegister:{
    marginTop:14,
    alignSelf:'center',
  },
  btnRegisterText:{
    color:'#a1a1a1',
    fontWeight:'bold'
  }
})