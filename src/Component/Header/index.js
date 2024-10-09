import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

export default function Header() {
 return (
   <View style={styles.containerLogo}>
      <Image
         source={require('../../assets/header.png')}
         resizeMode='contain'
         style={{width:'100%', height:60, paddingTop:10, paddingBottom:10}}
      />
   </View>
  );
}

const styles = StyleSheet.create({
   containerLogo:{
      width:'100%',
      height:70,
      borderBottomWidth:0.2,
      borderBottomRadius:10,
      backgroundColor:'#262626',
      elevation:1,
      shadowColor:'#262626',
      alignItems:'center',
      justifyContent:'center'
   }
})