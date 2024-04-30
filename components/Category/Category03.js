import React from 'react'
import styled from 'styled-components'
import Input from '../Input/Input';
const Container=styled.div` 
margin-top:10px; 
width:100%;

`
const SidebarTitle = styled.h2`
font-size:25px;
font-weight:normal;
margin-bottom:5px;
`;
const Sidebar = styled.div` 
border-top:1px solid grey;
border-bottom:1px solid grey;
width:100%; 
height:100%;
border-right:2px soild #e214212;
display:flex;
flex-direction:column; 
`
 
const Category3 = ({handleChange }) => {
   
    return (
        <Container style={{width: "inherit"}}>
            <SidebarTitle>顏色</SidebarTitle> 
            <Sidebar>
                <label className="sidebar-label-container">
                    <Input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>全部
                </label>
                <Input
                    handleChange={handleChange}
                    value="black"
                    color="red"
                    title="black"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="white"
                    color="red"
                    title="white"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="red"
                    title="red"
                    name="test"
                    color="red"
                />
                <Input
                    handleChange={handleChange}
                    value="green"
                    title="green"
                    color="green" 
                    name="test"
                />
                <Input
                handleChange={handleChange}
                value="white"
                title="white"
                name="test"
            />
            </Sidebar>
        </Container>
    )
}

export default Category3
