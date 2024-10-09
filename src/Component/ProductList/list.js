import React from 'react';
import { FlatList, View } from 'react-native';
import Product from '../../Component/ProductList/cadProd';

export default function ProductList({ data }) {
   return (
      <View>
         <FlatList
            data={data}
            renderItem={({ item }) => <Product data={item.descricao} />}
            keyExtractor={(item) => String(item.id)}
         />
      </View>
   );
}
