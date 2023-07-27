import { map } from 'lodash';
import { useProducts } from '@nx-demo/queries';

function Welcome() {
  const { data } = useProducts();

  return (
    <>
      <h2>Products</h2>
      {map(data?.products, (product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  );
}

export default Welcome;
