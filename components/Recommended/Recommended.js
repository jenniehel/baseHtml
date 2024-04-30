import React from 'react'
import Button from '../Button/Button';
import styled from 'styled-components';
const Container=styled.div` 
    display: flex;
 
`;
const Title=styled.h2` 
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 40px;
`;
 
const RecommemedTiltle = ({handleClick}) => {
  return (
    <div>
    <Title>Recommended</Title>
    <Container>
      <Button onClickHandler={handleClick} value="" title="All Products" />
      <Button onClickHandler={handleClick} value="Nike" title="Nike" />
      <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
      <Button onClickHandler={handleClick} value="Puma" title="Puma" />
      <Button onClickHandler={handleClick} value="Vans" title="Vans" />
    </Container>
  </div>
  )
}

export default RecommemedTiltle
