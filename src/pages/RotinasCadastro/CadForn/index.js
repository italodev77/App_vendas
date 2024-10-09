import React from 'react';
import {SafeAreaView, ScrollView, TextInput ,View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function CadForn() {

  const navigation = useNavigation();

  const sucessRegister = () => {
    alert('Cadastrado(a) com sucesso!')
  }
 return (
    
    <Animatable.View style={styles.container}>
      <ScrollView style={styles.scrollContainer}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
      showsVerticalScrollIndicator={false}
      >

        <Text style={styles.inputTitle}>Razão Social:</Text>
        <TextInput 
          style={styles.input}
        />
        <Text style={styles.inputTitle}>CNPJ:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
        />
        <Text style={styles.inputTitle}>UF:</Text>
        <TextInput 
          style={styles.input}
        />
        <Text style={styles.inputTitle}>CEP:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
        />
        <Text style={styles.inputTitle}>Bairro:</Text>
        <TextInput 
          style={styles.input}
        />
        <Text style={styles.inputTitle}>Rua:</Text>
        <TextInput 
          style={styles.input}
        />
        <Text style={styles.inputTitle}>Número:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
        />
        <Text style={styles.inputTitle}>Telefone:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
        />
        <Text style={styles.inputTitle}>E-mail:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='email-address'
        />
          
        <TouchableOpacity style={styles.btn} onPress={ () => sucessRegister()}>
          <Text style={styles.btnText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('RotinasCadastro')}>
          <Text style={styles.btnText}>VOLTAR</Text>
        </TouchableOpacity>

      </ScrollView>

    </Animatable.View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFF',
    margin:5
  },
  inputTitle:{
    fontSize:18,
    marginTop:10,
    fontWeight:'bold'
  },
  input:{
    borderBottomWidth:1,
    borderColor:'#262626',
    height:40,
    marginBottom:10,
    fontSize:16,
  },
  btn:{
    backgroundColor:'#009900',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    width:'80%',
    height:50,
    borderRadius:15
  },
  scrollContainer:{
    marginStart:'5%',
    marginEnd:'5%',
    margin: 10,
  },
  btnText:{
    fontSize:18,
    color: '#FFF',
    fontWeight:'bold'
  }
})