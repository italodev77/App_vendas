import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Login(){

  const navigation = useNavigation();

 return (
    <View style={styles.container}>

      <Animatable.View animation={'fadeInLeft'} delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Registro</Text>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>

        <Text style={styles.inputTitle}>Email:</Text>
        <TextInput 
          placeholder='informe um e-mail'
          style={styles.input}
        />

        <Text style={styles.inputTitle}>Senha:</Text>
        <TextInput 
          placeholder='informe uma senha'
          style={styles.input}
          secureTextEntry={true}
        />
        <Text style={styles.inputTitle}>Confirme a sua senha:</Text>
        <TextInput 
          placeholder='Confirmação de senha'
          style={styles.input}
        />

        <Text style={styles.inputTitle}>CNPJ da sua empresa:</Text>
        <TextInput 
          placeholder='informe o seu CNPJ'
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnInicio} onPress={ () => navigation.navigate('Login') }>
          <Text style={styles.btnInicioText}>Início</Text>
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
  btnInicio:{
    marginTop:14,
    alignSelf:'center',
  },
  btnInicioText:{
    color:'#a1a1a1',
    fontWeight:'bold'
  }
})