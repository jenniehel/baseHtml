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
const Category2 = ({handleChange}) => {
   
    return (
        <Container style={{width: "inherit"}}>
            <SidebarTitle>價錢</SidebarTitle> 
            <Sidebar>
                <label className="sidebar-label-container">
                    <Input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>全部
                </label>
                <Input
                    handleChange={handleChange}
                    value="0"
                    title="$0-50"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="1"
                    title="$51-100"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="2"
                    title="$101-150"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="3"
                    title="超過150"
                    name="test"
                />
            </Sidebar>
        </Container>
    )
}

export default Category2
