import React, { useState } from 'react'
import ProductLIst from '@/components/ProductList/ProductLIst'
import Recommended from '@/components/Recommended/Recommended'
import styled from 'styled-components'
import Sidebar from '@/components/SideBar/Sidebar'
import products from "@/data/data";
import Card from '@/components/Card/Card'
import SearchBar from '@/components/SearchBar/SearchBar'
const Container = styled.div`
display:flex;
width:100vw;
`
const RContainer = styled.div`
  margin-left:30vw;
 `
const Product = () => {
    // filters 
    const [selectCategory, setSelectCategory] = useState("");
    // 分類
    const [query, setQuery] = useState("");
    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    // 種類 Nike.... 輸入
    const handleInputChange = event => {
        setQurey(event.target.value);
    }
    // 種類 Nike....
    const handleClick = event => {
        setSelectCategory(event.target.value);
    }
    const handleChange = (event) => {
        setSelectCategory(event.target.value);
      };
    const filteredData = (Product, selected, query) => {
        let filteredProducts = products; 
        if (query) {
            filteredProducts = filteredItems;
            
        }
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) => {
                    console.log(JSON.stringify({ category, color, company, newPrice, title }))
                    
                    return category === selected || color === selected || company === selected
                        || newPrice === selected
                        || title === selected
                })
        }
        
        return filteredProducts.map(({ img, title, star, reviews, prePrice },i) => {
           return(<Card key={i}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prePrice={prePrice}
            />)
             
        })


    }
    const result = filteredData(products, selectCategory, query)
    return (
        <Container> 
            <Sidebar handleChange={handleChange} /> 
            <RContainer>
                <Recommended handleClick={handleClick} />
                <SearchBar query={query} handleInputChange={handleInputChange} />
                <ProductLIst result={result} /> 
            </RContainer>
        </Container>
    )
}

export default Product
