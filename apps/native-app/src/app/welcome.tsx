import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { map } from 'lodash';
import { useProducts } from '@nx-demo/queries';

function Welcome() {
  const { data } = useProducts();

  return (
    <SafeAreaView>
      <Text>Products</Text>
      {map(data?.products, (product) => (
        <Text key={product.id}>{product.title}</Text>
      ))}
    </SafeAreaView>
  );
}

export default Welcome;
