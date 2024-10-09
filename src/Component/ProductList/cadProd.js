import React,{useState} from 'react';
import { View } from 'react-native';

export default function Product() {
   const [produtos,setProdutos] = useState([
      {  
         id:1,
         descricao: 'Arroz',
         preco: 4.50
      }
   ])
 return (
   <View>
      <Text>{produtos}</Text>
   </View>
  );
}