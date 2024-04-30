import React from 'react'
import { popularProducts } from '@/public/data'
import styled from 'styled-components'
import Product from './Product'
const Products = () => {
    const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
  return (
    <Container>
    {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
