import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../Component/Header';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../../Component/ProductList/list';
export default function Vendas() {
   const navigation = useNavigation();
   const [count, setCount] = useState(0)

   return (
      <SafeAreaView style={styles.container}>
         <Header/>
         <View>
            <View style={styles.containerInput}>

               <TextInput
                  placeholder='Produto'
                  style={styles.input}
               />
            </View>
            <View>
               <ProductList/>
            </View>
         </View>
         <View style={styles.btnContainer}>
            <TouchableOpacity onPress={ () => navigation.navigate('TelaFinalizac')} >
               <View style={styles.countBox}>
                  <Text style={styles.countText}>{count}</Text>
               </View>
               <Feather name="shopping-cart" size={40} color="#262626" />
            </TouchableOpacity>
         </View>
         <View style={styles.btnBack}>
            <TouchableOpacity onPress={() => navigation.navigate('Rotinas')}>
               <Feather name="arrow-left" size={40} color="#262626" />
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF'
   },
   countBox: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#009900',
      width: 20,
      height: 20,
      borderRadius: 12,
      zIndex: 99,
      bottom: -2,
      left: -4,
   },
   countText: {
      fontSize: 12,
      color:'#FFF'
   },
   btnContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'flex-end',
      bottom: '5%',
      right: '5%',
      width:50,
      height:50,
   },
   btnBack: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'flex-start',
      bottom: '5%',
      left: '5%',
      width:50,
      height:50,
   },
   containerInput:{
      justifyContent:'center',
      alignItems:'center'
   },
   input:{
      height:40,
      margin:15,
      width:'90%',
      borderWidth:1,
      padding:5
   }
});