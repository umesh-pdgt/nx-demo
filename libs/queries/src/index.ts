import { useQuery } from '@tanstack/react-query';

const getProducts = () =>
  fetch('https://dummyjson.com/products').then((res) => res.json());

export const useProducts = () =>
  useQuery({ queryKey: ['products'], queryFn: getProducts });
