import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';


import * as Animatable  from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome(){

  const navigation = useNavigation();

 return (
   <View style={styles.container}>

    <View style={styles.containerLogo}>
      <Animatable.Image
        animation={'flipInY'}
        source={require('../../assets/icon.png')}
        style={{width:'100%', height:150}}
        resizeMode='contain'
      />
    </View>

    <Animatable.View delay={750} animation={'fadeInUp'} style={styles.containerForm}>
      <Text style={styles.title}>Monitore e organize sua empresa de qualquer lugar</Text>
      <Text style={styles.message}>Efetue o login para iniciar</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Acessar</Text>
      </TouchableOpacity>

    </Animatable.View>

    

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#262626',

  },
  containerLogo:{
    flex:2,
    backgroundColor:'#262626',
    justifyContent:'center',
    alignItems:'center'
  },
  containerForm:{
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius:28,
    borderTopRightRadius:28,
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  title:{
    color:'#000',
    fontSize:25,
    fontWeight:'bold',
    marginTop:28,
    marginBottom:12
  },
  message:{
    color:'#333333'
  },
  btn:{
    position: 'absolute',
    backgroundColor:'#009900',
    borderRadius:50,
    paddingVertical:8,
    width:'60%',
    alignSelf:'center',
    bottom:'15%',
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    fontSize:18,
    color:'#FFF',
    fontWeight:'bold'
  }
})